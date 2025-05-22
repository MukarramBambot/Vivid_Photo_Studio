import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import ExcelJS from 'exceljs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database('bookings.db');
const app = express();

// Ensure downloads directory exists
const downloadsDir = join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/downloads', express.static(join(__dirname, 'downloads')));

// Initialize database with improved schema
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    serviceType TEXT NOT NULL,
    date TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    payment_status TEXT DEFAULT 'unpaid' CHECK(payment_status IN ('unpaid', 'partial', 'paid')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create or update trigger for updated_at
db.exec(`
  CREATE TRIGGER IF NOT EXISTS update_timestamp 
  AFTER UPDATE ON bookings
  BEGIN
    UPDATE bookings SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END
`);

// Input validation middleware
const validateBooking = (req, res, next) => {
  const { name, email, phone, serviceType } = req.body;
  
  if (!name || !email || !phone || !serviceType) {
    return res.status(400).json({ error: 'Required fields are missing' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }
  
  next();
};

// Create booking with validation
app.post('/api/bookings', validateBooking, (req, res) => {
  try {
    const { name, email, phone, serviceType, date, message } = req.body;
    const stmt = db.prepare(`
      INSERT INTO bookings (name, email, phone, serviceType, date, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(name, email, phone, serviceType, date, message);
    
    // Get the created booking
    const booking = db.prepare('SELECT * FROM bookings WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get all bookings with optional filters
app.get('/api/bookings', (req, res) => {
  try {
    const { status, date, serviceType } = req.query;
    let query = 'SELECT * FROM bookings WHERE 1=1';
    const params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }
    if (date) {
      query += ' AND date = ?';
      params.push(date);
    }
    if (serviceType) {
      query += ' AND serviceType = ?';
      params.push(serviceType);
    }

    query += ' ORDER BY created_at DESC';
    const bookings = db.prepare(query).all(...params);
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Update booking status
app.patch('/api/bookings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status, payment_status } = req.body;
    
    let query = 'UPDATE bookings SET';
    const params = [];
    
    if (status) {
      query += ' status = ?,';
      params.push(status);
    }
    if (payment_status) {
      query += ' payment_status = ?,';
      params.push(payment_status);
    }
    
    query = query.slice(0, -1); // Remove last comma
    query += ' WHERE id = ?';
    params.push(id);
    
    const stmt = db.prepare(query);
    stmt.run(...params);
    
    const updatedBooking = db.prepare('SELECT * FROM bookings WHERE id = ?').get(id);
    res.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Failed to update booking' });
  }
});

// Export to Excel with improved formatting
app.get('/api/export', async (req, res) => {
  try {
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Bookings');
    
    // Style the header row
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Service Type', key: 'serviceType', width: 20 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Payment Status', key: 'payment_status', width: 15 },
      { header: 'Created At', key: 'created_at', width: 20 },
      { header: 'Updated At', key: 'updated_at', width: 20 }
    ];
    
    // Style header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE6E6FA' }
    };
    
    // Add data and style rows
    worksheet.addRows(bookings);
    
    // Style all cells
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
        cell.alignment = { vertical: 'middle', horizontal: 'left' };
      });
    });
    
    const filename = `bookings_${Date.now()}.xlsx`;
    const filepath = join(__dirname, 'downloads', filename);
    
    await workbook.xlsx.writeFile(filepath);
    res.json({ filename });
  } catch (error) {
    console.error('Error exporting data:', error);
    res.status(500).json({ error: 'Failed to export data' });
  }
});

// Get booking statistics
app.get('/api/statistics', (req, res) => {
  try {
    const stats = {
      total: db.prepare('SELECT COUNT(*) as count FROM bookings').get().count,
      pending: db.prepare("SELECT COUNT(*) as count FROM bookings WHERE status = 'pending'").get().count,
      confirmed: db.prepare("SELECT COUNT(*) as count FROM bookings WHERE status = 'confirmed'").get().count,
      completed: db.prepare("SELECT COUNT(*) as count FROM bookings WHERE status = 'completed'").get().count,
      todayBookings: db.prepare("SELECT COUNT(*) as count FROM bookings WHERE date(created_at) = date('now')").get().count
    };
    res.json(stats);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});