import emailjs from '@emailjs/browser';

/**
 * Sends contact form details via EmailJS.
 * Expects variables:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 * 
 * @param {Object} data - Contact form data
 * @returns {Promise} - EmailJS response promise
 */
export const sendEmailViaEmailJS = async (data) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not fully configured. Check your environment variables.');
  }

  const templateParams = {
    name: data.name,
    user_email: data.email,
    message: data.message,
  };

  return emailjs.send(serviceId, templateId, templateParams, {
    publicKey: publicKey,
  });
};
