# Deployment Guide

This guide helps you deploy your portfolio to various hosting platforms.

## 🚀 Recommended Hosting Platforms

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### 2. Netlify
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
# Add environment variables in Netlify dashboard
```

### 3. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### 4. Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

## 🔧 Environment Variables Setup

For production deployment, set these environment variables in your hosting platform:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 📝 Pre-Deployment Checklist

- [ ] Remove any console.log statements (optional)
- [ ] Update live demo URL in README
- [ ] Test contact form functionality
- [ ] Verify all images load correctly
- [ ] Check responsive design on various devices
- [ ] Test dark/light theme toggle
- [ ] Ensure all external links work
- [ ] Verify EmailJS credentials are set
- [ ] Test build process locally (`npm run build`)

## 🔗 Post-Deployment

1. **Update README**: Replace placeholder URLs with actual deployment URL
2. **Test Live Site**: Thoroughly test all functionality
3. **Share Your Portfolio**: Update your resume, LinkedIn, and other profiles
4. **Monitor**: Check for any issues or broken links

## 🐛 Common Deployment Issues

### Build Errors
- Check Node.js version compatibility
- Ensure all dependencies are installed
- Verify environment variables

### Contact Form Not Working
- Verify EmailJS credentials
- Check CORS settings in EmailJS dashboard
- Ensure environment variables are set correctly

### Images Not Loading
- Check image paths are correct
- Ensure images are in public folder or properly imported
- Verify build process includes all assets

---

Happy deploying! 🎉
