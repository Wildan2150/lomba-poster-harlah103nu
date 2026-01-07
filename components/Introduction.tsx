import React from 'react';
import { SubTheme } from '../types';
import { Sparkles, Leaf, Globe, Zap, History, Target, Heart } from 'lucide-react';

const subThemes: (SubTheme & { icon: React.ReactNode })[] = [
  {
    title: "Hubbul Wathon Minal Iman",
    description: "NU Sebagai Benteng NKRI.",
    icon: <Globe className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Transformasi Digital NU",
    description: "Dakwah Santun di Era Algoritma.",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    title: "Merawat Jagat",
    description: "Ekologi Spiritual untuk Kelestarian Bumi.",
    icon: <Leaf className="w-5 h-5 text-green-500" />
  },
  {
    title: "Generasi Emas Aswaja",
    description: "Cerdas, Modern, dan Berkarakter.",
    icon: <Sparkles className="w-5 h-5 text-purple-500" />
  }
];

const Introduction: React.FC = () => {
  return (
    <div className="px-6 py-16 bg-white">
      <div className="space-y-12 mb-12">
        {/* Sambutan */}
        <div>
          <h2 className="text-2xl font-bold text-nu-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gold-500 rounded-full block"></span>
            Sambutan Hangat
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            <span className="font-bold text-nu-800 block mb-2">Hallo Rekan dan Rekanita!</span>
            Dalam rangka menyemarakkan Harlah Nahdlatul Ulama tahun 2026, PAC IPNU IPPNU Gadingrejo mengundang seluruh Pelajar dan Mahasiswa kreatif untuk menuangkan ide visualnya. Mari berkarya untuk mengawal tradisi dan menyongsong peradaban mulia melalui seni desain grafis.
          </p>
        </div>

        {/* Latar Belakang */}
        <div>
           <h2 className="text-xl font-bold text-nu-900 mb-4 flex items-center gap-2">
             <History className="text-nu-600" size={24} />
             Latar Belakang
           </h2>
           <p className="text-gray-600 leading-relaxed text-justify bg-gray-50 p-5 rounded-xl border border-gray-100">
             Momentum satu abad lebih Nahdlatul Ulama memanggil santri dan pelajar untuk mengisi ruang digital. Kini, khidmah tidak lagi terbatas fisik, tetapi juga visual. Lomba ini adalah panggung bagi generasi muda untuk menerjemahkan semangat <span className="font-semibold text-nu-700">"Mengawal Indonesia Merdeka, Menuju Peradaban Mulia"</span> menjadi karya seni yang inspiratif, sekaligus menyejukkan jagat maya dari narasi negatif.
           </p>
        </div>

        {/* Tujuan Kegiatan */}
        <div>
           <h2 className="text-xl font-bold text-nu-900 mb-4 flex items-center gap-2">
             <Target className="text-nu-600" size={24} />
             Tujuan Kegiatan
           </h2>
           <div className="grid gap-4">
              <div className="flex gap-4 items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                 <div className="mt-1 bg-nu-100 p-2 rounded-lg text-nu-600 shrink-0">
                    <Globe size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800">Syiar Visual</h4>
                    <p className="text-sm text-gray-600">Memperkuat dakwah digital NU yang ramah, santun, dan kekinian.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                 <div className="mt-1 bg-nu-100 p-2 rounded-lg text-nu-600 shrink-0">
                    <Sparkles size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800">Wadah Kreativitas</h4>
                    <p className="text-sm text-gray-600">Ajang kompetisi sehat dan upgrade skill desain bagi pelajar & mahasiswa.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                 <div className="mt-1 bg-nu-100 p-2 rounded-lg text-nu-600 shrink-0">
                    <Heart size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800">Aksi Positif</h4>
                    <p className="text-sm text-gray-600">Mengajak generasi muda mengisi media sosial dengan konten edukatif, nasionalis, dan peduli lingkungan.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Theme Card */}
      <div className="bg-nu-50 rounded-2xl p-6 border border-nu-100">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-nu-600 uppercase tracking-widest">Tema Utama</span>
          <h3 className="text-xl md:text-2xl font-bold text-nu-900 mt-2 leading-snug">
            "Mengawal Indonesia Merdeka, Menuju Peradaban Mulia"
          </h3>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-500 text-center uppercase tracking-wide mb-4">
            Pilihan Sub-Tema (Pilih Salah Satu)
          </p>
          <div className="grid gap-3">
            {subThemes.map((theme, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-nu-300 transition-colors">
                <div className="mt-1 p-2 bg-gray-50 rounded-full">
                  {theme.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{theme.title}</h4>
                  <p className="text-sm text-gray-500">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;