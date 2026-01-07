import React from 'react';
import { FileImage, AlertTriangle, Check, X, Download } from 'lucide-react';

const Technical: React.FC = () => {
  return (
    <div className="px-6 py-16 bg-white">
      <h2 className="text-2xl font-bold text-nu-900 mb-8 flex items-center gap-2">
        <span className="w-1 h-6 bg-gold-500 rounded-full block"></span>
        Ketentuan Teknis
      </h2>

      {/* Specs Card */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="col-span-2 bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-3">
           <FileImage className="text-blue-600 flex-shrink-0" />
           <div>
             <h4 className="font-bold text-blue-900 text-sm uppercase">Format File</h4>
             <p className="text-blue-700 text-sm">JPG/JPEG/PNG High Quality</p>
           </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
           <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Ukuran</span>
           <span className="block font-bold text-gray-800">A3</span>
           <span className="text-xs text-gray-500">(29,7 x 42 cm)</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
           <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Orientasi</span>
           <span className="block font-bold text-gray-800">Potret</span>
           <span className="text-xs text-gray-500">(Vertikal)</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
           <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Resolusi</span>
           <span className="block font-bold text-gray-800">300 DPI</span>
           <span className="text-xs text-gray-500">Anti pecah</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
           <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Size Max</span>
           <span className="block font-bold text-gray-800">10 MB</span>
        </div>
      </div>

      {/* Rules */}
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Check className="text-green-600" size={20} />
            Aturan Main (Do's)
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <p><strong>Orisinalitas:</strong> Karya asli buatan sendiri, belum pernah juara/dipublikasikan.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <p><strong>Logo Wajib:</strong> Harlah NU 2026, IPNU & IPPNU, Medsos PAC Gadingrejo.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <X className="text-red-600" size={20} />
            Larangan (Don'ts)
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <p><strong>AI Generative:</strong> Dilarang menggunakan Full AI generate. AI hanya boleh untuk elemen pendukung kecil. Layout wajib manual.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <p><strong>Etika:</strong> Dilarang mengandung SARA, Pornografi, Politik Praktis.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <p><strong>Visual Ulama:</strong> Tidak boleh berbentuk karikatur yang melebih-lebihkan fisik.</p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-4 items-start">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 flex-shrink-0">
                <Download size={20} />
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm">Download Aset Logo</h4>
                <p className="text-xs text-gray-600 mt-1 mb-2">Link download tersedia di Bio Instagram kami.</p>
                <a href="#" className="text-xs font-bold text-yellow-700 underline">Ke Instagram @pacipnuippnugadingrejo</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;