'use client';

import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-capoeira-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-capoeira-gold mb-4">ABADÁ</h3>
            <p className="text-gray-400">Capoeira Belgique avec Mestre Tigre</p>
          </div>

          <div>
            <h4 className="font-bold text-capoeira-gold mb-4">Adresses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Auderghem - Lun 20:15</li>
              <li>Woluwe - Mer/Ven/Dim</li>
              <li>Etterbeek - Jeu 16:30</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-capoeira-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@capoeirabelgique.be</li>
              <li>+32 483 14 17 58</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-capoeira-gold mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-capoeira-gold transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-capoeira-gold transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 ABADÁ Capoeira Belgique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
