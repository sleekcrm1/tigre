'use client';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-capoeira-red to-capoeira-gold">
      <motion.div className="max-w-4xl mx-auto px-4 text-center text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="text-5xl font-bold mb-6">Rejoignez-nous!</h2>
        <p className="text-xl mb-12">Commencez votre voyage capoeira aujourd'hui</p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.a href="mailto:info@capoeirabelgique.be" className="bg-white text-capoeira-red font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 hover:bg-capoeira-dark hover:text-white transition" whileHover={{ scale: 1.05 }}>
            <Mail size={24} /> Email
          </motion.a>
          <motion.a href="tel:+3248314175" className="bg-capoeira-dark text-capoeira-gold font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 hover:bg-white hover:text-capoeira-red transition" whileHover={{ scale: 1.05 }}>
            <Phone size={24} /> Appeler
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
