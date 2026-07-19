import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Contact/Hero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Illustration from '../components/Contact/Illustration';
import GoogleMap from '../components/Contact/GoogleMap';
import SocialLinks from '../components/Contact/SocialLinks';


export default function Contact() {
  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Contact Us | Company Name</title>
        <meta
          name="description"
          content="Get in touch with us for software development, web design and IT solutions."
        />
        <meta property="og:title" content="Contact Us | Company Name" />
        <meta
          property="og:description"
          content="please share your valuable feedback and feel free to express"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen bg-brand-black text-slate-100 flex flex-col justify-between selection:bg-light-blue/30 selection:text-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-12">
          {/* Hero Section */}
          <Hero />

          {/* Core Layout Grid (Desktop: Left 30%, Center 40%, Right 30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_40%_30%] gap-8 w-full lg:items-stretch">
            {/* Left Section — Contact Info (Phone & Social) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full order-1 lg:order-1 flex flex-col gap-6 h-full justify-between"
            >
              <ContactInfo types={['phone']} />
              <SocialLinks />
            </motion.div>

            {/* Center Section — Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full order-2 lg:order-2 flex min-h-0"
            >
              <ContactForm />
            </motion.div>

            {/* Right Section — Office and Email */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full order-3 lg:order-3 flex flex-col gap-6 h-full justify-between"
            >
              <ContactInfo types={['email']} />
              <ContactInfo types={['office']} />
            </motion.div>
          </div>

          {/* Responsive Dark Map */}
          <GoogleMap />

          {/* Footer */}
          
        </main>
      </div>
    </>
  );
}
