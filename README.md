# Momentum Institute - Official Website

A modern, responsive website for Momentum Institute, a premier coaching center specializing in Science and Mathematics education from Class 8 to NEET & JEE preparation.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with perfect display across all devices
- **5 Complete Pages**: Home, About, Courses, Results, and Contact
- **Interactive Elements**: Request-a-call modal, course cards, image gallery
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Contact Form**: Functional form with validation and API integration
- **Google Maps**: Embedded location with directions link

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Animations**: CSS transitions and keyframes

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## ⚡ Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd momentum-institute
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
momentum-institute/
├── public/
│   └── assets/           # Image assets (replace placeholders)
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── contexts/        # React contexts
│   └── main.tsx         # Entry point
├── api/                 # Serverless functions
└── README.md
```

## 🖼️ Asset Replacement

Replace placeholder images in `/public/assets/` with actual photos:

- `director.jpg` - Photo of Vivek Sir
- `hero.jpg` - Hero section background
- `archi_raj_neet_2024.jpg` - Archi Raj, NEET 2024 top performer photo
- `classroom1.jpg`, `classroom2.jpg` - Classroom photos

## 🔧 Contact Form Configuration

### Development
The contact form currently uses a mock API. For development, it simulates successful submissions.

### Production Setup

1. **Deploy the API endpoint** (`/api/request-call.js`) to:
   - Vercel: Automatically handled
   - Netlify: Place in `netlify/functions/`
   - Custom server: Host as Express.js endpoint

2. **Database Integration** (recommended):
   ```javascript
   // Example with Supabase
   import { createClient } from '@supabase/supabase-js'
   
   const supabase = createClient(
     process.env.SUPABASE_URL,
     process.env.SUPABASE_ANON_KEY
   )
   
   // Save form data
   await supabase
     .from('contact_requests')
     .insert([{ name, phone, preferred_time, message }])
   ```

3. **Email Notifications** (using SendGrid):
   ```javascript
   import sgMail from '@sendgrid/mail'
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   
   await sgMail.send({
     to: 'info@momentuminstitute.in',
     from: 'noreply@momentuminstitute.in',
     subject: 'New Callback Request',
     text: `New request from ${name} (${phone})`
   })
   ```

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

### Traditional Hosting
```bash
# Build
npm run build

# Upload contents of 'dist' folder to web server
```

## 🗺️ Google Maps Configuration

The embedded map uses the provided coordinates. To customize:

1. Update the iframe `src` in `Contact.tsx`
2. Replace the `mapUrl` constant with your specific location URL
3. For production, consider getting a Google Maps API key for better control

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🎨 Design System

### Colors
- Primary: `#87CEEB` (Sky Blue)
- Accent: `#003366` (Dark Navy)
- Secondary: `#FFFFFF` (White)

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## 📞 Contact Information

- Phone: [8340118918](tel:8340118918)
- Director: Vivek Sir (M.Tech — IIT Kanpur)
- Hours: Mon-Sat 9:00 AM – 8:00 PM, Sun Closed

## 🧪 Testing

To add unit tests:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

Example test structure:
```javascript
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByText('Home')).toBeInTheDocument()
})
```

## 🔐 Security Notes

- Form validation on both client and server side
- API endpoints include CORS configuration
- Phone number format validation
- XSS prevention through React's built-in protections

## 📈 Performance Optimizations

- Lazy loading of images
- Code splitting by route
- Optimized bundle size with Vite
- Efficient re-renders with React best practices

## 🐛 Common Issues

1. **Images not loading**: Ensure assets are in `/public/assets/`
2. **API errors**: Check console for network issues
3. **Mobile layout**: Clear browser cache after CSS changes

## 📄 License

This project is created for Momentum Institute. All rights reserved.

## 💡 Future Enhancements

- Online admission portal
- Student dashboard
- Fee payment integration
- Live chat support
- Blog section for study materials

---

For any technical support or customization needs, please contact the development team.