import React from 'react';
import { Trophy, Award, Palette, Lightbulb, MessageSquare } from 'lucide-react';
import { PrizeItem } from '../types';

const prizes: PrizeItem[] = [
  { rank: 'Juara 1', description: 'Uang Pembinaan + Sertifikat Cetak', icon: Trophy, color: 'text-yellow-500' },
  { rank: 'Juara 2', description: 'Uang Pembinaan + Sertifikat Cetak', icon: Trophy, color: 'text-gray-400' },
  { rank: 'Juara 3', description: 'Uang Pembinaan + Sertifikat Cetak', icon: Trophy, color: 'text-orange-700' },
];

const Prizes: React.FC = () => {
  return (
    <div className="px-6 py-16 bg-nu-50">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Criteria */}
        <div>
          <h2 className="text-2xl font-bold text-nu-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gold-500 rounded-full block"></span>
            Aspek Penilaian
          </h2>
          <div className="space-y-4">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-nu-100 flex items-center gap-4">
               <div className="bg-nu-100 p-3 rounded-full text-nu-700 font-bold text-sm">30%</div>
               <div>
                 <h4 className="font-bold text-gray-800 text-sm">Kesesuaian Tema</h4>
                 <p className="text-xs text-gray-500">Nyambung dengan tema Harlah NU?</p>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-nu-100 flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full text-blue-700 font-bold text-sm">30%</div>
               <div className="flex-1">
                 <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    <Lightbulb size={14} /> Orisinalitas
                 </h4>
                 <p className="text-xs text-gray-500">Unik, bukan template.</p>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-nu-100 flex items-center gap-4">
               <div className="bg-purple-100 p-3 rounded-full text-purple-700 font-bold text-sm">25%</div>
               <div className="flex-1">
                 <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    <Palette size={14} /> Estetika
                 </h4>
                 <p className="text-xs text-gray-500">Warna, layout, kerapian.</p>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-nu-100 flex items-center gap-4">
               <div className="bg-pink-100 p-3 rounded-full text-pink-700 font-bold text-sm">15%</div>
               <div className="flex-1">
                 <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    <MessageSquare size={14} /> Komunikasi
                 </h4>
                 <p className="text-xs text-gray-500">Pesan mudah dipahami.</p>
               </div>
             </div>
          </div>
        </div>

        {/* Prizes */}
        <div>
          <h2 className="text-2xl font-bold text-nu-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gold-500 rounded-full block"></span>
            Hadiah
          </h2>
          <div className="space-y-3">
            {prizes.map((prize, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-gold-400">
                <prize.icon className={`w-8 h-8 ${prize.color}`} />
                <div>
                  <h4 className={`font-bold text-lg ${prize.color}`}>{prize.rank}</h4>
                  <p className="text-sm text-gray-600">{prize.description}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-nu-400">
                <Award className="w-8 h-8 text-nu-500" />
                <div>
                  <h4 className="font-bold text-lg text-nu-700">Seluruh Peserta</h4>
                  <p className="text-sm text-gray-600">E-Sertifikat Nasional</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Prizes;