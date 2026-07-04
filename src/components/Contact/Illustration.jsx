import { motion } from 'framer-motion';
import contactImage from '../../assets/contact_illustration.png';

/**
 * Illustration component that renders the custom-generated support illustration
 * and applies a floating animation and a glowing backdrop.
 */
export default function Illustration() {
  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glowPulse = {
    animate: {
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="w-full h-full min-h-[350px] flex items-center justify-center relative select-none">
      {/* Background Glowing Orbs */}
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute w-[280px] h-[280px] bg-primary-blue/15 rounded-full blur-[80px] -z-10"
      />
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute w-[180px] h-[180px] bg-light-blue/10 rounded-full blur-[60px] -z-10"
        style={{ transitionDelay: '2s' }}
      />

      {/* Picture Container with Float Animation */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="w-full max-w-[360px] blue-border-glow-card rounded-2xl overflow-hidden p-1.5 border border-primary-blue/30 shadow-2xl bg-card-bg/40 backdrop-blur-md"
      >
        <img
          src={contactImage}
          alt="Contact Support Illustration"
          className="w-full h-auto rounded-xl object-cover invert"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
