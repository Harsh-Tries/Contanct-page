import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer:
        'We respond to all general inquiries within 15 minutes during business hours. For complex technical requirements, our engineering and sales teams will analyze the details and provide a comprehensive proposal within 24 hours.'
    },
    {
      question: 'Do you work internationally?',
      answer:
        'Yes, absolutely. We work with businesses and startups globally, spanning North America, Europe, Australia, and Asia. Our workflows, meetings, and sprint schedules are optimized to accommodate client time zones seamlessly.'
    },
    {
      question: 'Can we schedule a meeting?',
      answer:
        'Yes, we would love to connect. You can either submit the contact form with your preferred times, email us directly, or call our line. We support virtual consultations via Google Meet, Zoom, and Microsoft Teams.'
    },
    {
      question: 'How do projects begin?',
      answer:
        'Every partnership begins with a thorough discovery phase where we assess your objectives, scope, and technical roadmap. Once aligned, we deliver a structured proposal and set up immediate development sprints.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full mt-16 md:mt-24 max-w-4xl mx-auto px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Find answers to common questions about working with us.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="blue-border-glow-card overflow-hidden border border-primary-blue/15 bg-card-bg/30 backdrop-blur-md rounded-xl transition-all duration-300"
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm md:text-base text-slate-200 group-hover:text-light-blue transition-colors duration-300">
                  {faq.question}
                </span>
                
                {/* Chevron icon with spin animation */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-slate-400 group-hover:text-light-blue shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Collapsible Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.35, ease: 'easeOut' },
                        opacity: { duration: 0.25, delay: 0.1 }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: 'easeIn' },
                        opacity: { duration: 0.15 }
                      }
                    }}
                  >
                    <div className="px-6 pb-5 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-primary-blue/10 pt-4 bg-brand-black/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
