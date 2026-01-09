import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Dimana saya bisa download Logo & Aset Lomba?",
    answer: "Anda bisa langsung mendownload seluruh aset logo melalui link berikut: bit.ly/AsetHarlahNUGadingrejo2026"
  },
  {
    question: "Apakah boleh menggunakan Canva?",
    answer: "Boleh, asalkan tidak menggunakan template jadi mentah-mentah. Peserta harus mengkreasikan layout sendiri. Pastikan elemen yang dipakai free copyright."
  },
  {
    question: "Apakah boleh mencantumkan Watermark/Tanda Tangan?",
    answer: "TIDAK BOLEH. Poster harus bersih dari identitas desainer (nama/logo pribadi) agar penjurian berlangsung objektif (Blind Judging)."
  },
  {
    question: "Apakah boleh mengirim lebih dari 1 karya?",
    answer: "Tidak boleh ya Rekan/Rekanita, satu peserta hanya diperbolehkan mengirimkan 1 karya terbaik."
  },
  {
    question: "Apakah pendaftaran dipungut biaya?",
    answer: "TIDAK. Lomba ini 100% GRATIS."
  },
  {
    question: "Bagaimana jika ada kendala saat upload file?",
    answer: "Pastikan ukuran file maksimal 10MB. Jika masih terkendala, silakan hubungi Narahubung via WhatsApp untuk bantuan teknis."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-16 bg-white">
      <div className="text-center mb-10">
        <HelpCircle className="w-10 h-10 text-nu-300 mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-nu-900">FAQ</h2>
        <p className="text-gray-500 text-sm">Pertanyaan yang sering diajukan</p>
      </div>

      <div className="space-y-3 max-w-lg mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-nu-300">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 text-left focus:outline-none"
            >
              <span className="font-bold text-gray-800 text-sm">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-nu-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;