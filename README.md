# Zohaib's Portfolio Website

A modern, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and provides a way for potential clients and employers to get in touch.



## ✨ Features

- 🎨 **Modern Design**: Clean, professional, and visually appealing interface
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- ✨ **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🚀 **Fast Performance**: Built with Vite for lightning-fast loading
- 📧 **Functional Contact Form**: Instant email delivery using Web3Forms
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure
- ♿ **Accessible**: Built with accessibility best practices in mind

## 🚀 Live Demo

[Visit Live Portfolio](https://zohaib-porfolio-website.vercel.app/) <!-- Replace with your actual URL -->

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
- Instant email delivery using Web3Forms
- Professional email formatting with subject lines
- Contact information display
- Social media integration
- Real-time success/error feedback messages

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

### Email & Form Handling
- **Web3Forms** - Professional email service with instant delivery
- **Custom Validation** - Client-side form validation with error handling
- **Enhanced Email Format** - Professional subject lines and formatted messages

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

3. **Set up environment variables (Optional)**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```
   
   **Note:** The contact form works without environment variables due to inline configuration, but setting this variable is recommended for production deployments.

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### 📧 Email Service Setup

The contact form uses **Web3Forms** for instant email delivery:

**Features:**
- ✅ **Instant Delivery** - Emails arrive within 5 seconds
- ✅ **No Configuration Required** - Works out of the box
- ✅ **Professional Format** - Enhanced subject lines and message formatting
- ✅ **Reliable** - No rate limits or API restrictions
- ✅ **Free Service** - Up to 250 submissions per month

**Optional Configuration:**
1. Visit [Web3Forms](https://web3forms.com/)
2. Enter your email to get a free access key
3. Add `VITE_WEB3FORMS_ACCESS_KEY=your_key` to `.env`

For deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## 📧 Email Technology Details

### Web3Forms Integration
This portfolio uses **Web3Forms** as the email service provider, offering several advantages over traditional solutions:

**Why Web3Forms?**
- 🚀 **Lightning Fast** - Sub-5-second email delivery
- 🔒 **Secure** - HTTPS encryption and spam protection
- 💰 **Cost Effective** - Free tier with 250 submissions/month
- 🛠️ **Easy Setup** - No complex API configurations
- 📱 **Reliable** - 99.9% uptime guarantee
- 🎯 **Professional** - Automatic email formatting and subject line enhancement

**Email Features:**
- **Smart Subject Lines** - Automatically formatted as "Portfolio Contact: [Subject] - from [Name]"
- **Reply-to Configuration** - Recipients can reply directly to the sender
- **Formatted Messages** - Clean, professional email layout with contact details
- **Timestamp Tracking** - Each email includes submission time
- **Contact Information** - Full sender details included in message body

**Technical Implementation:**
- Inline service integration (no external dependencies)
- Real-time form validation
- Error handling with user-friendly messages
- Success feedback with submission confirmation
- Fallback error handling for network issues

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
│   │   ├── Contact.jsx         # Contact form with Web3Forms integration
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── ScrollToTop.jsx     # Scroll to top functionality
│   ├── hooks/
│   │   └── useTheme.js         # Theme management hook
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
- **Instant Email Delivery** - Web3Forms integration with 5-second delivery
- **Inline Email Service** - No external dependencies or API calls

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
- 📧 Email: [Zohaibwork8059@gmail.com](mailto:Zohaibwork8059@gmail.com)
- 💼 LinkedIn: [zohaibkaramat](https://www.linkedin.com/in/zohaibkaramat/)
- 🐙 GitHub: [zohaib-karamat](https://github.com/zohaib-karamat)
- 📍 Location: Lahore, Pakistan

**Contact Form Features:**
- ✨ **Instant Delivery** - Messages arrive in under 5 seconds
- 📧 **Professional Format** - Subject: "Portfolio Contact: [Your Subject] - from [Your Name]"
- 🔄 **Reply-to Setup** - Direct reply functionality to sender's email
- ✅ **Real-time Validation** - Form validation with helpful error messages
- 📱 **Responsive Design** - Works perfectly on all devices

---

⭐ **If you find this project helpful, please consider giving it a star!**

Made with ❤️ by [Zohaib Karamat](https://github.com/zohaib-karamat)
