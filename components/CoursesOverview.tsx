'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';

export default function CoursesOverview() {
  const courses = [
    {
      name: 'Gymnasium Auderghem',
      address: 'Boulevard des Invalides 216, 1160 Auderghem',
      times: 'Lun 20:15–21:45',
      image: 'http://www.capoeirabelgique.be/wp-content/uploads/2016/09/gymnasium.jpg',
    },
    {
      name: 'Sportcity Woluwe',
      address: 'Avenue Salomé 2, 1150 WSP',
      times: 'Mer/Ven/Dim',
      image: 'http://www.capoeirabelgique.be/wp-content/uploads/2016/09/sportcity.jpg',
    },
    {
      name: 'Centre Sportif Etterbeek',
      address: 'Rue des Champs 71, 1040 Etterbeek',
      times: 'Jeu 16:30–19:30',
      image: 'http://www.capoeirabelgique.be/wp-content/uploads/2015/04/Centresportif114-940x626.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-capoeira-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Nos Cours
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-capoeira-red overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-capoeira-red">{course.name}</h3>
                <div className="flex gap-3 mb-3">
                  <MapPin className="text-capoeira-gold flex-shrink-0" size={20} />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{course.address}</p>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-capoeira-gold flex-shrink-0" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">{course.times}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
