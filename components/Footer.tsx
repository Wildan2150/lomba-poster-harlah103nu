import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2d2b2c] to-[#473a22] text-white pt-16 pb-8 px-6 rounded-t-3xl mt-6">
      <div className="max-w-xl mx-auto">
        
        {/* Important Notes */}
        <div className="mb-10 bg-white/15 p-6 rounded-2xl border border-yellow-500">
          <div className="flex items-center gap-2 mb-4 text-gold-400">
            <ShieldAlert size={20} />
            <h3 className="font-bold">Hak Cipta & Ketentuan</h3>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-nu-200">
            <li>Panitia berhak mendiskualifikasi peserta yang terbukti melanggar aturan.</li>
            <li>Hak cipta tetap pada peserta, Panitia berhak mempublikasikan karya terpilih sebagai media syiar.</li>
            <li>Keputusan dewan juri bersifat mutlak.</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Narahubung</h4>
            <div className="space-y-3">
              <a href="https://wa.me/6287878316456" target="_blank"  className="flex items-center gap-3 text-nu-200 hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone size={16} />
                </div>
                <span className="text-sm">0878-7831-6456 (Rekan Yakin)</span>
              </a>
              <a href="https://wa.me/6289519264803" target="_blank" className="flex items-center gap-3 text-nu-200 hover:text-white transition-colors">
                 <div className="p-2 bg-white/10 rounded-full">
                  <Phone size={16} />
                </div>
                <span className="text-sm">0895-1926-4803 (Rekanita Nava)</span>
              </a>
            </div>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-4 text-white">Ikuti Kami</h4>
             <div className="space-y-3">
               <a href="https://www.instagram.com/pacipnuippnugadingrejo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                 <FontAwesomeIcon icon={faInstagram} />
                 @pacipnuippnugadingrejo
               </a>
               <a href="https://www.tiktok.com/@pelajarnugadingrejo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-black rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                 <FontAwesomeIcon icon={faTiktok} />
                 @pelajarnugadingrejo
               </a>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-yellow-500">
          <p className="text-xs text-nu-400">
            © 2026 PAC IPNU IPPNU Gadingrejo. All rights reserved.<br/>
            Guidebook Lomba Poster Harlah NU ke-103
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;