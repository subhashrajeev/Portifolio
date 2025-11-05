# AI Engineer Portfolio 🚀

A modern, responsive portfolio website showcasing AI engineering skills, projects, and technologies with stunning animations and interactive elements.

## ✨ Features

### 🎨 Modern Design
- Clean and professional UI with dark theme
- Gradient accents and smooth transitions
- Fully responsive layout (mobile, tablet, desktop)
- Custom animations and micro-interactions

### 🔧 Technologies Showcase
- **Animated Technology Logos** with unique hover effects
- Categories: Languages, AI/ML Frameworks, Web Development, Cloud & DevOps, Databases
- Interactive tech cards with:
  - 3D tilt effects
  - Particle animations
  - Unique animations per technology (spin, pulse, shake, glow)
  - Tooltips on hover

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with animated elements
2. **About Section** - Professional bio with animated stats counter
3. **Technologies Section** - Comprehensive tech stack with animated logos
4. **Projects Section** - Featured projects showcase
5. **Contact Section** - Contact information and working form

### ⚡ Interactive Features
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Scroll-reveal animations
- Active section highlighting in navigation
- Typing effect on hero subtitle
- Parallax scrolling effects
- Floating animations
- Loading screen animation
- Easter egg (try the Konami Code: ↑↑↓↓←→←→BA)

### 🎭 Cool Animations
- **Tech Logos**: Each technology has unique hover animations
  - Python: Bounce and rotate
  - React: Continuous spin
  - TensorFlow: Glow pulse
  - PyTorch: Shake effect
  - Docker: Float and rotate
  - And many more!
- **Scroll Animations**: Elements fade in and slide up as you scroll
- **Particle Effects**: Floating particles on tech card hover
- **3D Tilt**: Cards tilt based on mouse position
- **Wave Animation**: Friendly wave emoji in hero section

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with advanced animations and effects)
- Vanilla JavaScript (no frameworks needed)
- Font Awesome Icons
- Devicons for technology logos

### Design Principles
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Intersection Observer API for scroll animations
- CSS animations and keyframes

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portifolio.git
   cd Portifolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

3. **Or use a local server**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

4. **Visit**
   - Open http://localhost:8000 in your browser

## 🎨 Customization

### Update Personal Information

1. **index.html**
   - Update hero title and subtitle
   - Add your email and location in the contact section
   - Update social media links
   - Add your actual projects
   - Modify technology stack to match your skills

2. **styles.css**
   - Change color scheme by modifying CSS variables in `:root`
   - Adjust animation speeds and effects
   - Customize responsive breakpoints

3. **script.js**
   - Modify animation timings
   - Add or remove interactive features
   - Update form submission logic

### Color Scheme
The portfolio uses CSS custom properties for easy theme customization:

```css
:root {
    --primary-color: #6366f1;    /* Indigo */
    --secondary-color: #8b5cf6;  /* Purple */
    --accent-color: #ec4899;     /* Pink */
    --dark-bg: #0f172a;          /* Dark blue */
    /* ... more colors ... */
}
```

### Add More Technologies

Add new tech cards in the technologies section:

```html
<div class="tech-card" data-tech="YourTech">
    <div class="tech-icon">
        <img src="path-to-logo.svg" alt="YourTech">
    </div>
    <p class="tech-name">YourTech</p>
</div>
```

## 📂 Project Structure

```
Portifolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive features and animations
└── README.md          # Documentation
```

## 🎯 Key Animations Explained

### Tech Card Animations
- **Hover Effect**: Cards lift up with shadow
- **Tilt Effect**: 3D perspective tilt following mouse
- **Logo Animations**: Each logo has unique animation on hover
- **Particle System**: Colorful particles emit on card hover
- **Shine Effect**: Light sweep across card

### Scroll Animations
- **Fade In**: Elements fade in when scrolling into view
- **Slide Up**: Elements slide up from below
- **Stagger Effect**: Sequential animation delays for grid items

### Hero Animations
- **Wave**: Hand wave emoji rotation
- **Float**: Floating card with vertical motion
- **Typing**: Text types out character by character
- **Gradient**: Animated gradient text
- **Scroll Indicator**: Bouncing scroll indicator

## 🌟 Features Showcase

### Technologies Section
The technologies section includes 30+ technology logos organized by category:
- **Languages**: Python, JavaScript, TypeScript, C++, Java
- **AI/ML**: TensorFlow, PyTorch, Keras, scikit-learn, OpenCV
- **Web**: React, Node.js, FastAPI, Django, Flask
- **Cloud**: AWS, Google Cloud, Docker, Kubernetes, Git
- **Databases**: PostgreSQL, MongoDB, Redis, MySQL

Each logo features:
- High-quality SVG from Devicons CDN
- Smooth hover animations
- Glow effects
- Interactive tooltips
- Unique motion for different technologies

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, hamburger menu)

## 🎮 Easter Eggs

Try the Konami Code on your keyboard: ↑ ↑ ↓ ↓ ← → ← → B A

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Update the contact section in `index.html` with your information:
- Email
- Location
- GitHub
- LinkedIn
- Twitter
- Personal website

## 🎨 Inspiration

This portfolio combines modern web design trends with practical functionality:
- Glassmorphism effects
- Gradient animations
- Micro-interactions
- Smooth page transitions
- Interactive 3D elements

## 🚀 Deployment

You can deploy this portfolio to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: One-click deployment
- **Any static hosting service**

### GitHub Pages Deployment

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://yourusername.github.io/Portifolio`

---

Built with ❤️ and lots of CSS animations

**Remember**: This is a template. Customize it to reflect your unique skills and personality!