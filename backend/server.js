import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import ExcelJS from 'exceljs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database('bookings.db');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/downloads', express.static(join(__dirname, 'downloads')));

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    serviceType TEXT NOT NULL,
    date TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create booking
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, phone, serviceType, date, message } = req.body;
    const stmt = db.prepare(
      'INSERT INTO bookings (name, email, phone, serviceType, date, message) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, email, phone, serviceType, date, message);
    res.json({ id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export to Excel
app.get('/api/export', async (req, res) => {
  try {
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Bookings');
    
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Service Type', key: 'serviceType', width: 20 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Created At', key: 'created_at', width: 20 }
    ];
    
    worksheet.addRows(bookings);
    
    const filename = `bookings_${Date.now()}.xlsx`;
    const filepath = join(__dirname, 'downloads', filename);
    
    await workbook.xlsx.writeFile(filepath);
    res.json({ filename });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});