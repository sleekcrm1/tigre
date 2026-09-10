'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function MestreTiger() {
  return (
    <section className="py-20 bg-capoeira-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-capoeira-gold">Mestre Tigre</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Francisco Alves, connu sous le nom de Mestre Tigre, est l'un des plus grands maîtres de capoeira en Europe.
            </p>

            <div className="space-y-4">
              {[
                { years: '25+', title: 'Années d\'expérience' },
                { years: '350+', title: 'Étudiants en Israël' },
                { years: '2006-2013', title: 'Enseignement en Espagne' },
                { years: '2013+', title: 'Bruxelles - Belgique' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Award className="text-capoeira-gold" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-capoeira-gold">{item.years}</p>
                    <p className="text-gray-300">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-capoeira-red to-capoeira-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800 h-96 rounded flex items-center justify-center">
              <p className="text-gray-400">Mestre Tigre Teaching</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
