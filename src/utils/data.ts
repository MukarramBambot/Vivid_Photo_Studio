import { Service, GalleryItem, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "From intimate ceremonies to grand celebrations, we capture every special moment of your wedding day with our artistic touch.",
    icon: "Camera",
    image: "https://images.pexels.com/photos/1024979/pexels-photo-1024979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Pre-Wedding Shoots",
    description: "Create stunning pre-wedding memories with our creative outdoor and studio shoots designed to tell your unique love story.",
    icon: "Heart",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Maternity Photography",
    description: "Celebrate the beauty of motherhood with our elegant maternity shoots that capture this special time in your life.",
    icon: "Baby",
    image: "https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Newborn Photography",
    description: "Preserve those precious early moments with gentle, professional newborn photography in a safe and comfortable environment.",
    icon: "CircleHeart",
    image: "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Portrait Photography",
    description: "Express your personality with our professional portrait photography for individuals, couples, and families.",
    icon: "User",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Candid Photography",
    description: "Capture authentic and unposed moments with our candid photography, perfect for events and natural storytelling.",
    icon: "ImageOff",
    image: "https://images.pexels.com/photos/2388648/pexels-photo-2388648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    title: "Commercial Photography",
    description: "Elevate your brand with professional commercial photography that showcases your products and services at their best.",
    icon: "Building",
    image: "https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    title: "Fashion Photography",
    description: "Highlight style and trends with our fashion photography services, ideal for portfolios, lookbooks, and campaigns.",
    icon: "Shirt",
    image: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    title: "Videography",
    description: "Complement your photography with our professional videography services to create stunning moving memories.",
    icon: "Video",
    image: "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Wedding",
    title: "Sarah & James Wedding"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Pre-Wedding",
    title: "Beach Engagement"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6954192/pexels-photo-6954192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Maternity",
    title: "Summer Maternity"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3354172/pexels-photo-3354172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Newborn",
    title: "Baby Emma"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Portrait",
    title: "Professional Headshot"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Candid",
    title: "Market Day"
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Commercial",
    title: "Artisan Coffee Shop"
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fashion",
    title: "Spring Collection"
  }
];

export const heroSlides = [
  {
    image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Capturing Life's Precious Moments",
    subtitle: "Professional Photography Since 2014"
  },
  {
    image: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wedding Photography",
    subtitle: "Your Special Day, Forever Remembered"
  },
  {
    image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Portrait Excellence",
    subtitle: "Showcasing Your Best Self"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily & David",
    role: "Wedding Clients",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "We couldn't be happier with our wedding photos! Vivid Photo Studio captured all the special moments and emotions of our day. The team was professional, creative, and made everyone feel comfortable.",
    rating: 5
  },
  {
    id: 2,
    name: "Jessica Roberts",
    role: "Maternity Client",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The maternity photoshoot exceeded my expectations. The photographer knew exactly how to make me feel beautiful and comfortable during this special time. The photos are absolutely stunning!",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Business Owner",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "I hired Vivid Photo Studio for product photography for my business, and they delivered exceptional quality. The attention to detail and professional service made the whole process easy.",
    rating: 4
  }
];