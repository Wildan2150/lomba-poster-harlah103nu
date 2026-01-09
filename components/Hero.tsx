import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-start pt-28 items-center bg-gradient-to-b from-[#2d2b2c] via-[#473a22] to-[#655c4b] text-white text-center px-6 pb-20 overflow-hidden">
      {/* Background Pattern Overlay - Reduced opacity for better text readability */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      {/* Organization Logos Container */}
      <div className="relative z-10 flex items-center justify-center gap-3 mb-8 bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
        
         <img 
          src="https://blogger.googleusercontent.com/img/a/AVvXsEiS9QsUttRX0v60XQGYL60YUhsHmIOBHsnwV0VxuofWClNuvgdmVzm9IkTMaigE-v9hYyCwLWOU8-jZJtDL9CEzZ6oX_EtepKEpdtABXPxLodvs3E5521sRi1KX8vjweV1ubf1ymnWw4NvLz9EdRoRTw1g5jutH-C9s3eUmufrjJtg_kR0QM0ly6Y7v3e62" 
          alt="Logo PAC Gadingrejo" 
          className="h-16 w-auto object-contain drop-shadow-md hover:scale-110 transition-transform" 
        />
      </div>

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center">
        {/* Main Event Logo with Backlight Glow */}
        <div className="mb-6 w-[80%] h-full relative group">
           {/* SOLUSI: Menambahkan 'Spotlight' putih di belakang logo agar logo terpisah dari background hijau */}
           {/*<div className="absolute inset-0 bg-white/70 rounded-full blur-[80px] transform scale-100"></div>*/}
           <div className="absolute inset-0 bg-gold-400/35 rounded-full blur-[80px] transform scale-100"></div>
           <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhr8PsbcbXb4W1AsKldN7PxJ-4fLX18ZF_3E2djJsktBbOYkAJudJMgkpMYUnhZ6EwGGBSCoNeCo531mLd3L3JVQ4gnHIgu5ITr4gbDXaGGQkSPFq5aDatu0vN3Dzkja1MMDlX8yjR9kUg2sLQX9mXPhVPQhnZObDD-zS6L1-ysKt2WlzQ7REjdExiQKhb_" 
            alt="Logo Harlah NU 2026" 
            className="w-full h-full object-contain drop-shadow-2xl relative z-10"
           />
        </div>

        <div className="inline-block px-4 py-1.5 mb-4 border border-gold-400/50 bg-gold-400/10 rounded-full text-gold-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
          Guidebook of Competition
        </div>
        
        {/* SOLUSI: Teks Utama menggunakan warna Putih Solid dengan Shadow agar kontras maksimal */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight leading-tight drop-shadow-lg">
          <span className="block text-gold-400 text-xl md:text-2xl font-bold mb-1 tracking-wide">LOMBA DESAIN POSTER</span>
          <span className="block text-white text-4xl md:text-5xl drop-shadow-xl mt-2">HARLAH NU KE-103</span>
        </h1>
        
        <p className="text-lg font-medium text-nu-50/80 mb-8 tracking-wide">
          PAC IPNU IPPNU Gadingrejo
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-3 px-4 mb-8">
            <a 
              href="https://forms.gle/9Lg3htmerWNajmHz8" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-350 text-yellow-900 font-bold rounded-xl shadow-lg shadow-gold-900/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              DAFTAR SEKARANG (GRATIS)
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#requirements" 
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all"
            >
              Baca Ketentuan
            </a>
        </div>

        <div className="bg-yellow-300/20 backdrop-blur-md rounded-xl p-4 border border-white/10 mb-8 w-full shadow-inner">
          <p className="italic font-serif text-sm md:text-base leading-relaxed text-slate-100">
            "Tunjukkan Karyamu, Rayakan Khidmah Satu Abad Lebih Nahdlatul Ulama"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm font-medium text-nu-100">
          <div className="flex items-center gap-2 bg-yellow-300/20 px-3 py-1.5 rounded-full border border-yellow-600/50 shadow-sm">
            <Calendar className="w-4 h-4 text-gold-400" />
            10 - 31 Januari 2026
          </div>
          <div className="flex items-center gap-2 bg-yellow-300/20 px-3 py-1.5 rounded-full border border-yellow-600/50 shadow-sm">
            <MapPin className="w-4 h-4 text-gold-400" />
            Gadingrejo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;