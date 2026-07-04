import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmailViaEmailJS } from '../utils/emailService';
import { sendEmailViaBackend } from '../utils/api';
import toast from 'react-hot-toast';

/**
 * Custom React Hook to manage validation and submission logic of the contact form.
 * Supports switching between EmailJS and Backend API.
 */
export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      agree: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const useBackend = import.meta.env.VITE_USE_BACKEND === 'true';

    // Show loading toast that we can dismiss later
    const loadingToastId = toast.loading('Sending your message, please wait...', {
      style: {
        background: '#151b22',
        color: '#e2e8f0',
        border: '1px solid rgba(12, 172, 244, 0.3)',
      },
    });

    try {
      if (useBackend) {
        await sendEmailViaBackend(data);
      } else {
        await sendEmailViaEmailJS(data);
      }
      
      toast.success('Thank you! Your message was sent successfully. 👋', {
        id: loadingToastId,
        duration: 5000,
        style: {
          background: '#151b22',
          color: '#e2e8f0',
          border: '1px solid rgba(0, 169, 226, 0.5)',
        },
      });
      
      reset();
    } catch (error) {
      console.error('Contact Form submission failed:', error);
      const errorMessage = error.text || error.message || 'Failed to send message. Please check your network or try again.';
      toast.error(errorMessage, {
        id: loadingToastId,
        duration: 5000,
        style: {
          background: '#151b22',
          color: '#ef4444',
          border: '1px solid rgba(239, 68, 68, 0.5)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
