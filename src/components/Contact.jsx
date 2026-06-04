import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
// Inline email service to avoid environment variable issues
const sendEmail = async (formData) => {
  const WEB3FORMS_ACCESS_KEY = 'fe13f037-a480-4cc0-8477-dcbd78daa4e8';
  
  console.log('🚀 Sending email with inline Web3Forms...');
  console.log('📋 Form data:', formData);

  // Create enhanced subject line
  const subjectLine = formData.subject 
    ? `Portfolio Contact: ${formData.subject} - from ${formData.name}`
    : `New Portfolio Message from ${formData.name}`;

  // Create formatted message
  const formattedMessage = `=== NEW PORTFOLIO CONTACT ===

From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'No subject provided'}

Message:
${formData.message}

---
Sent via your portfolio website contact form
Time: ${new Date().toLocaleString()}`;

  const emailPayload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: subjectLine,
    name: formData.name,
    email: formData.email,
    message: formattedMessage,
    from_name: formData.name,
    replyto: formData.email,
    to: 'Zohaibwork8059@gmail.com'
  };

  try {
    console.log('📤 Sending to Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      throw new Error(`Web3Forms HTTP error: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Web3Forms result:', result);

    if (!result.success) {
      throw new Error(`Web3Forms failed: ${result.message}`);
    }

    return {
      success: true,
      message: 'Message sent successfully!',
      service: 'Web3Forms'
    };

  } catch (error) {
    console.error('❌ Email send error:', error);
    return {
      success: false,
      message: error.message || 'Failed to send message. Please try again.',
      service: 'error'
    };
  }
};

const validateFormData = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Contact section with form and social links
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // No initialization needed for alternative services

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle form submission with real email functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setErrors({ general: result.message });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrors({ general: 'Failed to send message. Please try again or contact me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Zohaibwork8059@gmail.com',
      href: 'mailto:Zohaibwork8059@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+923231934708',
      href: 'tel:+923231934708'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lahore, Pakistan',
      href: null
    }
  ];

  // Social media links
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/zohaib-karamat',
      color: 'hover:text-[#F0F0FF]'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zohaibkaramat/',
      color: 'hover:text-[#F0F0FF]'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--app-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-[var(--app-muted)] max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-[var(--app-text)] mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-[var(--app-muted)] mb-8 leading-relaxed">
                Don't hesitate to reach out to me if you have any questions or if you're 
                interested in working together. I'm always open to discussing new opportunities 
                and projects.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Component = info.href ? 'a' : 'div';
                  return (
                    <motion.div
                      key={info.title}
                      whileHover={info.href ? { x: 5 } : {}}
                      className="group flex items-center p-4 bg-[var(--app-elevated)] rounded-xl border border-[var(--app-border)] transition-colors duration-200 hover:border-[#6C63FF]"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-[var(--app-bg)] rounded-lg mr-4 border border-[var(--app-border)]">
                        <info.icon className="text-[#6C63FF]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--app-text)]">
                          {info.title}
                        </h4>
                        <Component
                          {...(info.href && { href: info.href })}
                          className={`text-[var(--app-muted)] ${
                            info.href ? 'hover:text-[var(--app-text)] transition-colors duration-200' : ''
                          }`}
                        >
                          {info.value}
                        </Component>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-[var(--app-text)] mb-4">
                  Follow me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-10 w-10 flex items-center justify-center rounded-full border border-[var(--app-border)] text-[var(--app-muted)] transition-colors duration-200 hover:border-[#6C63FF] ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[var(--app-surface)] rounded-2xl border border-[var(--app-border)] p-8"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[var(--app-muted)] text-sm mb-1 block"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full bg-[var(--app-bg)] border border-[var(--app-border)] rounded-xl px-4 py-3 text-[var(--app-text)] placeholder-[var(--app-muted)] text-sm focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF30] transition-all duration-200 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[#9090A8] text-sm mb-1 block"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full bg-[#0A0A0F] border border-[#2A2A3A] rounded-xl px-4 py-3 text-[#F0F0FF] placeholder-[#9090A8] text-sm focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF30] transition-all duration-200 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-[var(--app-muted)] text-sm mb-1 block"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[var(--app-bg)] border border-[var(--app-border)] rounded-xl px-4 py-3 text-[var(--app-text)] placeholder-[var(--app-muted)] text-sm focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF30] transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[var(--app-muted)] text-sm mb-1 block"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className={`w-full bg-[var(--app-bg)] border border-[var(--app-border)] rounded-xl px-4 py-3 text-[var(--app-text)] placeholder-[var(--app-muted)] text-sm focus:outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF30] transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-[#6C63FF] hover:bg-[#5A52E0] text-[var(--app-text)] font-medium rounded-xl py-3 px-6 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:animate-glow-pulse"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 bg-green-400/10 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle />
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 bg-red-400/10 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle />
                      <span className="font-medium">
                        {errors.general || 'Failed to send message'}
                      </span>
                    </div>
                    <p className="text-red-400 text-sm mt-1">
                      Please try again or contact me directly at{' '}
                      <a
                        href="mailto:Zohaibwork8059@gmail.com"
                        className="underline hover:text-red-300"
                      >
                        Zohaibwork8059@gmail.com
                      </a>
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
