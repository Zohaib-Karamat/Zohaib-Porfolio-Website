# Zohaib's Portfolio Website

A modern, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and provides a way for potential clients and employers to get in touch.

![Portfolio Screenshot](https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Portfolio+Screenshot)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional, and visually appealing interface
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- ✨ **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🚀 **Fast Performance**: Built with Vite for lightning-fast loading
- 📧 **Functional Contact Form**: Real email integration using EmailJS
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure
- ♿ **Accessible**: Built with accessibility best practices in mind

## 🚀 Live Demo

[Visit Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual URL -->

## 📋 Sections

### 🏠 Hero Section
- Animated typing effect showcasing different roles
- Professional profile image
- Call-to-action buttons
- Social media links
- Smooth scroll indicators

### 👨‍💻 About Section
- Personal introduction and background
- Interactive skill bars with animations
- Technology categories (Frontend, Backend, Database, Tools)
- Experience statistics
- Professional journey narrative

### 💼 Projects Section
- Project showcase with hover effects
- Detailed project modals
- Technology stack display
- Live demo and GitHub links
- Project categories and filtering

### 📞 Contact Section
- Functional contact form with validation
- Real-time form submission using EmailJS
- Contact information display
- Social media integration
- Success/error feedback messages

### 🔗 Additional Features
- Scroll-to-top button
- Smooth section navigation
- Loading states and animations
- Mobile-first responsive design

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React version with modern features
- **JavaScript ES6+** - Modern JavaScript syntax and features
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library (Feather Icons)

### Form Handling
- **EmailJS** - Email service for contact form functionality
- **Custom Validation** - Client-side form validation

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16.0.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zohaib-karamat/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### 📧 EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

For detailed setup instructions, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

## 🏗️ Building for Production

### Create a production build
```bash
npm run build
# or
yarn build
```

### Preview the production build
```bash
npm run preview
# or
yarn preview
```

### Deploy
The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── Zohaib_Resume.pdf
├── src/
│   ├── assets/
│   │   ├── profile_placeholder.jpeg
│   │   └── react.svg
│   ├── components/
│   │   ├── About.jsx           # About section with skills
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── ScrollToTop.jsx     # Scroll to top functionality
│   ├── hooks/
│   │   └── useTheme.js         # Theme management hook
│   ├── services/
│   │   └── emailService.js     # EmailJS integration
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Component styles
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 🎨 Customization

### Personal Information

Update these files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name and professional titles
   - Profile image
   - Social media links
   - Resume download link

2. **About Section** (`src/components/About.jsx`):
   - Personal bio and background
   - Skills and proficiency levels
   - Experience statistics

3. **Projects Section** (`src/components/Projects.jsx`):
   - Project data and descriptions
   - Technology stacks
   - Live demo and repository links

4. **Contact Section** (`src/components/Contact.jsx`):
   - Contact information
   - Social media profiles

### Styling and Theming

1. **Colors** - Modify `tailwind.config.js`:
   ```js
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: {
             // Your primary color palette
           },
           secondary: {
             // Your secondary color palette
           }
         }
       }
     }
   }
   ```

2. **Fonts** - Update in `index.css` or Tailwind config
3. **Animations** - Customize in individual components

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in `Navbar.jsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance Features

- **Code Splitting** - Efficient bundle splitting
- **Lazy Loading** - Images and components
- **Optimized Animations** - 60fps smooth animations
- **Responsive Images** - Adaptive image loading
- **Fast Build Times** - Vite's lightning-fast builds

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Zohaib Karamat**
- 📧 Email: [juttzohaib875@gmail.com](mailto:juttzohaib875@gmail.com)
- 💼 LinkedIn: [zohaibkaramat](https://www.linkedin.com/in/zohaibkaramat/)
- 🐙 GitHub: [zohaib-karamat](https://github.com/zohaib-karamat)
- 📍 Location: Lahore, Pakistan

---

⭐ **If you find this project helpful, please consider giving it a star!**

Made with ❤️ by [Zohaib Karamat](https://github.com/zohaib-karamat)
