import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <motion.section
      className="text-center py-16 md:py-24 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-light-blue/5 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4">
        {/* Overtitle */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-blue/30 bg-primary-blue/5 text-light-blue text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-light-blue animate-ping" />
          SAY HELLO
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          Say Hello <span className="inline-block animate-bounce origin-bottom">👋</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          please share your valuable feedback and feel free to express
        </motion.p>
      </div>
    </motion.section>
  );
}
