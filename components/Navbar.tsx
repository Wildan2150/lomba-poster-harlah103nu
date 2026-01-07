import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Intro', href: '#intro' },
  { label: 'Syarat', href: '#requirements' },
  { label: 'Teknis', href: '#technical' },
  { label: 'Alur', href: '#flow' },
  { label: 'Hadiah', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo Text/Brand */}
        <div className="flex items-center gap-3">
           <img 
             src="https://blogger.googleusercontent.com/img/a/AVvXsEiS9QsUttRX0v60XQGYL60YUhsHmIOBHsnwV0VxuofWClNuvgdmVzm9IkTMaigE-v9hYyCwLWOU8-jZJtDL9CEzZ6oX_EtepKEpdtABXPxLodvs3E5521sRi1KX8vjweV1ubf1ymnWw4NvLz9EdRoRTw1g5jutH-C9s3eUmufrjJtg_kR0QM0ly6Y7v3e62" 
             alt="Logo PAC" 
             className="w-10 h-10 object-contain"
           />
           <div className="flex flex-col">
             <span className="font-bold text-nu-900 text-sm leading-tight tracking-tight">PAC IPNU IPPNU</span>
             <span className="font-bold text-nu-700 text-xs leading-tight tracking-wide">GADINGREJO</span>
           </div>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-nu-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://bit.ly/DaftarPosterNU2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-nu-600 to-nu-500 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1"
          >
            Daftar <ExternalLink size={12}/>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-nu-50 hover:text-nu-800 border-l-4 border-transparent hover:border-nu-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
             <a 
                href="https://bit.ly/DaftarPosterNU2026"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mx-6 my-3 py-3 text-center bg-nu-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-nu-700 transition-colors"
              >
                Daftar Sekarang
              </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;