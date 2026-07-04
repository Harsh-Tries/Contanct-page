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

          {/* Core Layout Grid (Desktop: Left 25%, Center 40%, Right 35%) */}
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
            {/* Left Section (25% Contact Info) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-[25%] flex-shrink-0"
            >
              <ContactInfo />
            </motion.div>

            {/* Center Section (40% Contact Form) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-[40%] flex-shrink-0"
            >
              <ContactForm />
            </motion.div>

            {/* Right Section (35% Modern SVG Illustration) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-[35%] flex-shrink-0"
            >
              <Illustration />
            </motion.div>
          </div>

          {/* Responsive Dark Map */}
          <GoogleMap />

          {/* Social Media Links & Footer */}
          <SocialLinks />
        </main>
      </div>
    </>
  );
}
