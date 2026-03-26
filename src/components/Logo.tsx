import React from 'react';
import { motion } from 'motion/react';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(6,182,212,0.5)]">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="1"
          y="6"
          width="3"
          height="5"
          rx="1.5"
          fill="white"
          fillOpacity="0.55"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 2.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0 }}
        />
        <motion.rect
          x="5"
          y="3.5"
          width="3"
          height="9"
          rx="1.5"
          fill="white"
          fillOpacity="0.75"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.rect
          x="9"
          y="0"
          width="3"
          height="16"
          rx="1.5"
          fill="white"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.rect
          x="13"
          y="0"
          width="3"
          height="16"
          rx="1.5"
          fill="white"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 0.7, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.rect
          x="17"
          y="3.5"
          width="3"
          height="9"
          rx="1.5"
          fill="white"
          fillOpacity="0.75"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.rect
          x="21"
          y="6"
          width="3"
          height="5"
          rx="1.5"
          fill="white"
          fillOpacity="0.55"
          style={{ originY: "50%", originX: "50%" }}
          animate={{ scaleY: [1, 2.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default Logo;
