import React from 'react';
import { User, CheckCircle2, Instagram, CalendarClock, ArrowRight } from 'lucide-react';

const Requirements: React.FC = () => {
  return (
    <div className="px-6 py-16 bg-gray-50">
      {/* Who Can Join */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-nu-900 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-gold-500 rounded-full block"></span>
          Siapa Boleh Ikut?
        </h2>
        
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
             <div className="bg-white p-2 rounded-full shadow-sm text-nu-600 mt-1">
               <User size={18} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">Kategori Pelajar</h4>
               <p className="text-sm text-gray-600">Siswa aktif SMP/MTs dan SMA/MA/SMK sederajat.</p>
             </div>
          </li>
          <li className="flex gap-4 items-start">
             <div className="bg-white p-2 rounded-full shadow-sm text-nu-600 mt-1">
               <User size={18} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">Kategori Mahasiswa</h4>
               <p className="text-sm text-gray-600">Mahasiswa aktif jenjang D3/D4/S1 dari perguruan tinggi manapun.</p>
             </div>
          </li>
          <li className="flex gap-4 items-start">
             <div className="bg-white p-2 rounded-full shadow-sm text-nu-600 mt-1">
               <CheckCircle2 size={18} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">Domisili</h4>
               <p className="text-sm text-gray-600">Berdomisili di Pasuruan Raya (Dibuktikan dengan Kartu Pelajar/KTM/KTP).</p>
             </div>
          </li>
          <li className="flex gap-4 items-start">
             <div className="bg-white p-2 rounded-full shadow-sm text-nu-600 mt-1">
               <User size={18} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">Individu</h4>
               <p className="text-sm text-gray-600">Peserta adalah perorangan, bukan kelompok.</p>
             </div>
          </li>
          <li className="flex gap-4 items-start">
             <div className="bg-white p-2 rounded-full shadow-sm text-pink-500 mt-1">
               <Instagram size={18} />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">Wajib Follow</h4>
               <p className="text-sm text-gray-600">Instagram resmi <span className="text-pink-600 font-medium">@pacipnuippnugadingrejo</span>.</p>
             </div>
          </li>
        </ul>
      </div>

      {/* Timeline */}
      <div className="bg-nu-800 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-lg mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
        
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
          <CalendarClock className="text-gold-400" />
          Timeline Lomba
        </h3>

        <div className="relative border-l-2 border-nu-600 ml-3 space-y-8 z-10">
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold-500 border-2 border-nu-800"></div>
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">10 - 31 Jan 2026</span>
            <h4 className="font-bold text-lg">Pendaftaran & Upload</h4>
            <p className="text-nu-200 text-sm">Ditutup pukul 23.59 WIB</p>
          </div>
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-nu-800"></div>
            <span className="text-xs font-semibold text-nu-300 uppercase tracking-wider">1 - 3 Feb 2026</span>
            <h4 className="font-bold text-lg">Proses Penjurian</h4>
          </div>
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-nu-800"></div>
            <span className="text-xs font-semibold text-white uppercase tracking-wider">4 Feb 2026</span>
            <h4 className="font-bold text-lg">Pengumuman Pemenang</h4>
          </div>
        </div>
      </div>

      <div className="text-center">
         <a 
           href="https://forms.gle/9Lg3htmerWNajmHz8" 
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-8 py-3 bg-nu-600 hover:bg-nu-700 text-white font-bold rounded-full shadow-lg shadow-nu-200 transition-all hover:-translate-y-1"
         >
           Daftar Sekarang <ArrowRight size={18} />
         </a>
      </div>
    </div>
  );
};

export default Requirements;