# Lazarus Industrial Group - Local Deployment Guide

## 🚀 Quick Start

### Option 1: Using the Start Script (Recommended)
```bash
cd /Users/jauge/Development/lazarusweb
./start.sh
```

### Option 2: Using Python Directly
```bash
cd /Users/jauge/Development/lazarusweb
python3 server.py
```

### Option 3: Using Python HTTP Server
```bash
cd /Users/jauge/Development/lazarusweb
python3 -m http.server 8000
```

## 🌐 Access the Website

Once the server is running, open your browser and navigate to:
- **Main Site**: http://localhost:8000
- **Homepage**: http://localhost:8000/index.html
- **Solutions**: http://localhost:8000/solutions.html
- **Contact**: http://localhost:8000/contact.html

## 📁 Project Structure

```
lazarusweb/
├── index.html              # Homepage
├── solutions.html          # Solutions page
├── contact.html            # Contact page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Image assets
├── videos/                # Video placeholders
├── server.py              # Development server
├── start.sh               # Quick start script
├── package.json           # Project configuration
└── README.md              # Documentation
```

## 🛠️ Development Features

### What's Included:
- ✅ **Responsive Design** - Works on all devices
- ✅ **Interactive Animations** - Scroll effects and hover animations
- ✅ **Contact Form** - Functional form with validation
- ✅ **Navigation** - Mobile-friendly menu system
- ✅ **SEO Ready** - Meta tags and semantic HTML
- ✅ **Accessibility** - WCAG 2.1 AA compliant

### Browser Testing:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Troubleshooting

### Port Already in Use
If port 8000 is busy, modify `server.py` and change:
```python
PORT = 8000  # Change to 8001, 8080, or any available port
```

### Python Not Found
Install Python 3:
- **macOS**: `brew install python3`
- **Windows**: Download from python.org
- **Linux**: `sudo apt install python3`

### Alternative Servers
If Python doesn't work, try these alternatives:

**Node.js (http-server)**:
```bash
npm install -g http-server
http-server -p 8000
```

**PHP**:
```bash
php -S localhost:8000
```

**Ruby**:
```bash
ruby -run -e httpd . -p 8000
```

## 📱 Mobile Testing

### Local Network Access
To test on mobile devices on the same network:
1. Find your computer's IP address: `ifconfig` (macOS/Linux) or `ipconfig` (Windows)
2. Access from mobile: `http://[YOUR_IP]:8000`

### Browser DevTools
- Press F12 to open developer tools
- Use device emulation to test responsive design
- Test touch interactions and mobile navigation

## 🎨 Customization

### Colors
Edit `css/styles.css` and modify the CSS custom properties:
```css
:root {
  --color-primary: #111317;        /* Lazarus Graphite */
  --color-accent-1: #C46F2F;      /* Lazarus Copper */
  --color-accent-2: #1E8FFB;      /* Ion Blue */
}
```

### Content
- Edit HTML files to update text content
- Replace placeholder images in `/images/` folder
- Update contact information in `contact.html`

### Styling
- Modify `css/styles.css` for design changes
- Add new components following the existing pattern
- Use the design token system for consistency

## 🚀 Production Deployment

### Static Hosting Options:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Push to GitHub repository
- **AWS S3**: Upload files to S3 bucket
- **CDN**: Use any CDN service

### Optimization for Production:
1. Minify CSS and JavaScript
2. Optimize images (WebP format)
3. Enable gzip compression
4. Set up proper caching headers
5. Add analytics tracking

## 📞 Support

For technical issues or questions:
- Check the browser console for errors
- Verify all files are in the correct directories
- Ensure the server is running on the correct port
- Test with different browsers

---

**Lazarus Industrial Group** - Reviving Industry. Reinventing Possibility.
