import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Requirements from './components/Requirements';
import Technical from './components/Technical';
import Flow from './components/Flow';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-nu-200">
      <Navbar />
      
      <main className="w-full max-w-2xl mx-auto bg-white shadow-xl min-h-screen overflow-hidden">
        <section id="cover">
          <Hero />
        </section>

        <section id="intro">
          <Introduction />
        </section>

        <section id="requirements">
          <Requirements />
        </section>

        <section id="technical">
          <Technical />
        </section>

        <section id="flow">
          <Flow />
        </section>

        <section id="prizes">
          <Prizes />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-nu-700 text-white shadow-lg transition-all duration-300 z-40 hover:bg-nu-800 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;