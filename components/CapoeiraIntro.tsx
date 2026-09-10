'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CapoeiraIntro() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'Histoire', content: 'La capoeira est un art martial brésilien créé par des esclaves africains au 16e siècle.' },
    { title: 'Technique', content: 'Combinaison de danse, de combat et d\'acrobatie avec des mouvements fluides et puissants.' },
    { title: 'Bénéfices', content: 'Améliore la flexibilité, force, coordination et confiance en soi.' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 className="text-5xl font-bold text-center mb-12 text-capoeira-red" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Qu'est-ce que la Capoeira?
        </motion.h2>
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {tabs.map((tab, i) => (
            <motion.button key={i} onClick={() => setActiveTab(i)} className={`px-6 py-2 rounded-full font-bold transition ${activeTab === i ? 'bg-capoeira-red text-white' : 'bg-gray-200 dark:bg-gray-800'}`} whileHover={{ scale: 1.05 }}>
              {tab.title}
            </motion.button>
          ))}
        </div>
        <motion.div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg" key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xl text-gray-800 dark:text-gray-200">{tabs[activeTab].content}</p>
        </motion.div>
      </div>
    </section>
  );
}
