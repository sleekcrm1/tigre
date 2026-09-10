'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-capoeira-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Retrouvez-nous sur Instagram
        </motion.h2>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/capoeira_abada_belgique/"
            data-instgrm-version="14"
            style={{ minWidth: '100%', maxWidth: '540px' }}
          >
            <a 
              href="https://www.instagram.com/capoeira_abada_belgique/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-capoeira-red font-bold"
            >
              ABADÁ Capoeira Belgique (@capoeira_abada_belgique)
            </a>
          </blockquote>
        </div>

        <div className="text-center">
          <motion.a
            href="https://www.instagram.com/capoeira_abada_belgique/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-capoeira-red text-white px-8 py-4 rounded-lg font-bold hover:bg-capoeira-dark transition text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Suivre sur Instagram →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
