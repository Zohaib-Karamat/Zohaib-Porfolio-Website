# Email Configuration Setup

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to set up email functionality:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID**

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Set template variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Email subject
   - `message` - Email message
   - `reply_to` - Reply-to email address
   - `to_email` - Your email address (where you want to receive messages)

5. Note down the **Template ID**

## 4. Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key**
3. Copy the key

## 5. Update Environment Variables

Update the `.env` file in your project root with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Security Considerations

- **Rate Limiting**: The contact form has built-in rate limiting (1 request per 10 seconds)
- **Validation**: Both client-side and server-side validation are implemented
- **Spam Protection**: EmailJS has built-in spam protection
- **Environment Variables**: Never commit your actual EmailJS credentials to version control

## 7. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Verify the form shows success/error states correctly

## 8. Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check your environment variables are correct
   - Verify your EmailJS service and template IDs
   - Check browser console for detailed error messages

2. **Email not received**
   - Check your spam/junk folder
   - Verify the template is configured correctly
   - Ensure your email service is properly connected

3. **Rate limiting errors**
   - Wait 10 seconds between form submissions
   - This is normal behavior to prevent spam

### Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Contact form name field
- `{{from_email}}` - Contact form email field  
- `{{subject}}` - Contact form subject field
- `{{message}}` - Contact form message field
- `{{to_email}}` - Your email (Zohaibwork8059@gmail.com)
- `{{reply_to}}` - Same as from_email for easy replies

## Features Implemented

✅ **Dark Mode by Default**: Website now opens in dark mode regardless of device theme
✅ **Real Email Delivery**: Contact form sends actual emails to your inbox
✅ **Form Validation**: Client-side validation with error messages
✅ **Rate Limiting**: Prevents spam submissions
✅ **Professional UX**: Loading states, success/error messages
✅ **Responsive Design**: Works on all devices
✅ **Accessibility**: Proper labels and ARIA attributes
