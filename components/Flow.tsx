import React from 'react';
import { PenTool, Upload, Send, PartyPopper, ExternalLink } from 'lucide-react';

const Flow: React.FC = () => {
  return (
    <div className="px-6 py-16 bg-gray-900 text-white">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Alur Pendaftaran</h2>
        <p className="text-gray-400 text-sm">Ikuti 4 langkah mudah ini</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
        
        {/* Step 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-green-500 group-[.is-active]:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
            <PenTool size={18} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white text-sm">Step 1: Berkarya</div>
            </div>
            <div className="text-gray-400 text-xs">Buat poster terbaikmu sesuai tema dan ketentuan teknis yang berlaku.</div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-nu-500 group-[.is-active]:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
            <Upload size={18} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white text-sm">Step 2: Posting</div>
            </div>
            <div className="text-gray-400 text-xs mb-2">Upload di IG (No Private), Tag @pacipnuippnugadingrejo. Caption filosofis.</div>
            <div className="text-[10px] text-nu-400 italic">#HarlahNU2026 #PosterHarlahGadingrejo #PelajarNUBerkarya</div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-blue-500 group-[.is-active]:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
            <Send size={18} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white text-sm">Step 3: Registrasi</div>
            </div>
            <div className="text-gray-400 text-xs mb-3">Isi form & upload file Hi-Res. Siapkan scan Kartu Pelajar/KTM.</div>
            <a 
              href="https://forms.gle/9Lg3htmerWNajmHz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/30"
            >
              Daftar Sekarang <ExternalLink size={12}/>
            </a>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-gold-500 group-[.is-active]:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
            <PartyPopper size={18} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white text-sm">Step 4: Selesai</div>
            </div>
            <div className="text-gray-400 text-xs">Tunggu pengumuman pemenang. Berdoa ya!</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Flow;