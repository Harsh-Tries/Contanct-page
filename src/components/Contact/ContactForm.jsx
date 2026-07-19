import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import { Send, Loader2, User, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  // Animation variants for validation error messages
  const errorVariants = {
    initial: { opacity: 0, y: -8, height: 0 },
    animate: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, height: 0, transition: { duration: 0.15, ease: 'easeIn' } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="blue-border-glow-card rounded-2xl p-6 md:p-8 bg-card-bg/50 backdrop-blur-xl shadow-2xl relative border border-primary-blue/20 h-full w-full flex flex-col"
    >
      {/* Decorative inner background glow */}
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-light-blue/5 rounded-full blur-[60px] pointer-events-none" />

      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide text-left">Send Message</h2>
      <p className="text-sm text-slate-400 mb-6 text-left">
        Fill out the form below and we will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5" noValidate>
        {/* Full Name */}
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-light-blue" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className={`w-full bg-brand-black/45 border rounded-lg py-2.5 px-4 text-white text-sm transition-all duration-300 placeholder-slate-600 focus:outline-none ${
                errors.name
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                  : 'border-slate-800 focus:border-light-blue focus:ring-1 focus:ring-light-blue/30'
              }`}
              {...register('name', {
                required: 'Full name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
            />
          </div>
          <AnimatePresence mode="wait">
            {errors.name && (
              <motion.span
                key="name-error"
                variants={errorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-red-400 text-xs font-medium mt-1 pl-1 block overflow-hidden"
              >
                {errors.name.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Email Address */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-light-blue" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={`w-full bg-brand-black/45 border rounded-lg py-2.5 px-4 text-white text-sm transition-all duration-300 placeholder-slate-600 focus:outline-none ${
                errors.email
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                  : 'border-slate-800 focus:border-light-blue focus:ring-1 focus:ring-light-blue/30'
              }`}
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
            />
          </div>
          <AnimatePresence mode="wait">
            {errors.email && (
              <motion.span
                key="email-error"
                variants={errorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-red-400 text-xs font-medium mt-1 pl-1 block overflow-hidden"
              >
                {errors.email.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Message */}
        <div className="flex flex-col text-left flex-1 min-h-0">
          <label htmlFor="message" className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-light-blue" />
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative flex-1 flex flex-col min-h-[160px]">
            <textarea
              id="message"
              placeholder="Tell us about your project or inquiry..."
              className={`w-full flex-1 min-h-[160px] bg-brand-black/45 border rounded-lg py-2.5 px-4 text-white text-sm transition-all duration-300 placeholder-slate-600 focus:outline-none resize-none ${
                errors.message
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                  : 'border-slate-800 focus:border-light-blue focus:ring-1 focus:ring-light-blue/30'
              }`}
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 20, message: 'Message must be at least 20 characters long' }
              })}
            />
          </div>
          <AnimatePresence mode="wait">
            {errors.message && (
              <motion.span
                key="message-error"
                variants={errorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-red-400 text-xs font-medium mt-1 pl-1 block overflow-hidden"
              >
                {errors.message.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Agree Checkbox */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <input
              id="agree"
              type="checkbox"
              className={`w-4 h-4 rounded border bg-brand-black/45 text-primary-blue focus:ring-primary-blue/30 focus:ring-offset-0 focus:outline-none cursor-pointer ${
                errors.agree ? 'border-red-500/50' : 'border-slate-800'
              }`}
              {...register('agree', {
                required: 'You must agree to the privacy policy'
              })}
            />
            <label htmlFor="agree" className="text-xs text-slate-400 select-none cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-light-blue hover:underline">
                privacy policy
              </a>
              .
            </label>
          </div>
          <AnimatePresence mode="wait">
            {errors.agree && (
              <motion.span
                key="agree-error"
                variants={errorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-red-400 text-xs font-medium mt-1 pl-1 block overflow-hidden"
              >
                {errors.agree.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-glow w-full py-3 mt-2 rounded-lg flex items-center justify-center gap-2 font-bold text-sm tracking-wider uppercase transition-all duration-300"
          aria-label="Send Message"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
