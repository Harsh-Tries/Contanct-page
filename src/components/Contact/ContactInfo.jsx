import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo({ types = ['phone', 'email', 'office'] }) {
  const allCards = [
    {
      type: 'phone',
      title: 'Phone',
      icon: Phone,
      details: ['+91 80004 36640'],
      buttonText: 'Call Now',
      action: 'tel:+918000436640',
      description: 'Mon-Fri from 9am to 6pm.'
    },
    {
      type: 'email',
      title: 'Email',
      icon: Mail,
      details: ['csipict@gmail.com'],
      buttonText: 'Send Email',
      action: 'mailto:csipict@gmail.com',
      description: 'Our support team responds within 24 hours.'
    },
    {
      type: 'office',
      title: 'Office',
      icon: MapPin,
      details: ['Survey No. 27, Trimurti Chowk,', 'Bharati Vidyapeeth Campus,', 'Dhankawadi, Pune - 411043'],
      buttonText: 'Open Maps',
      action: 'https://maps.google.com/?q=Survey+No.+27,+near+Trimurti+Chowk,+Bharati+Vidyapeeth+Campus,+Dhankawadi,+Pune,+Maharashtra+411043',
      description: 'Come say hello at our headquarters.'
    }
  ];

  const cards = allCards.filter(card => types.includes(card.type));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, idx) => {
        const IconComponent = card.icon;

        return (
          <motion.div
            key={card.type}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="blue-border-glow-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group border border-primary-blue/20 bg-card-bg/40 backdrop-blur-md"
            aria-label={`${card.title} Card`}
          >
            {/* Background card highlight */}
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary-blue/5 rounded-full blur-2xl group-hover:bg-light-blue/15 transition-all duration-500" />

            <div className="flex items-start gap-4 mb-4">
              {/* Icon Wrapper with bouncing/scale animation on hover */}
              <motion.div
                className="p-3 rounded-lg bg-primary-blue/10 border border-primary-blue/20 text-light-blue flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </motion.div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">{card.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{card.description}</p>
              </div>
            </div>

            {/* Dynamic Card Details */}
            <div className="my-3 flex-grow">
              {card.details.map((detail, dIdx) => (
                <p key={dIdx} className="text-slate-200 font-semibold tracking-wide text-sm md:text-base">
                  {detail}
                </p>
              ))}
            </div>

            {/* Premium Button */}
            <div className="mt-4">
              <a
                href={card.action}
                target={card.type === 'office' ? '_blank' : '_self'}
                rel={card.type === 'office' ? 'noopener noreferrer' : ''}
                className="w-full flex items-center justify-center py-2 px-4 rounded-lg bg-primary-blue/5 border border-primary-blue/30 text-white font-semibold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-blue hover:to-dark-blue hover:border-transparent hover:shadow-lg hover:shadow-primary-blue/20"
              >
                {card.buttonText}
              </a>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
