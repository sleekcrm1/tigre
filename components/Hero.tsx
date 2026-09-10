'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-capoeira-red to-capoeira-dark flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www-static.capoeirabelgique.be/wp-content/uploads/2022/10/Capoeira_matin-148-_68A8941-Grand-edited.jpeg"
          alt="Capoeira students"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-capoeira-red/80 to-capoeira-dark/80"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-capoeira-gold rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brazil-green rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          ABADÁ
        </motion.h1>
        <motion.p
          className="text-2xl md:text-4xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Capoeira Belgique
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-capoeira-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Avec Mestre Tigre
        </motion.p>
      </motion.div>
    </section>
  );
}
