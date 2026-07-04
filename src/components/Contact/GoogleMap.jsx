import { motion } from 'framer-motion';

export default function GoogleMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full mt-16 md:mt-24"
    >
      <div className="text-left mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Our Location</h2>
        <p className="text-sm text-slate-400 mt-1">
          Drop by our headquarters. We would love to host you!
        </p>
      </div>

      {/* Frame Container */}
      <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden blue-border-glow-card border border-primary-blue/20 shadow-2xl relative p-1.5 bg-card-bg/20 backdrop-blur-md">
        {/* Sleek overlay gradient */}
        <div className="absolute inset-0 pointer-events-none border border-light-blue/20 rounded-2xl z-10" />

        {/* Iframe with CSS filters to style it dark mode */}
        <iframe
          title="Office Location Map"
          src="https://maps.google.com/maps?q=Survey%20No.%2027,%20near%20Trimurti%20Chowk,%20Bharati%20Vidyapeeth%20Campus,%20Dhankawadi,%20Pune,%20Maharashtra%20411043&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: '1rem',
            // High-fidelity dark mode styling filter
            filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%) saturate(80%)',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.section>
  );
}
