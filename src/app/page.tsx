'use client';

import React, { useState, useEffect } from 'react';

const Icon = ({ name, className }: { name: string; className: string }) => (
  <img src={`https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/${name}.svg`} alt={`${name} icon`} className={className} />
);

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} onClick={onClick} className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-lg font-serif tracking-wider">
    {children}
  </a>
);

export default function ElegantCafePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Kavárna U Kódu - Nejlepší káva v Praze";
    
    const faviconSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#1A1A1A"/><path d="M11 11L7 16L11 21" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 11L25 16L21 21" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: '#o-nas', label: 'O Nás' },
    { href: '#nabidka', label: 'Nabídka' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#C0C0C0] font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-white tracking-widest">
            Kavárna <span className="text-[#D4AF37]">U Kódu</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Icon name={isMenuOpen ? 'x' : 'menu-2'} className="w-8 h-8 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <nav className="flex flex-col space-y-8 text-center">
            {menuItems.map((item) => <NavLink key={item.href} href={item.href} onClick={closeMenu}>{item.label}</NavLink>)}
          </nav>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20 bg-black">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-tight mb-4">
              Nejlepší káva pro vaše <span className="text-[#D4AF37]">bugy</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Útočiště pro developery a kreativce v srdci Prahy. Nalaďte se na správnou vlnu s naší prémiovou kávou v inspirativním prostředí.
            </p>
            <a href="#nabidka" className="mt-10 inline-block bg-[#D4AF37] text-[#1A1A1A] font-bold py-3 px-8 rounded-sm text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Prozkoumat Nabídku
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-24 sm:py-32 bg-[#1A1A1A]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Příběh naší kavárny</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-10"></div>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Jsme moderní kavárna v srdci Prahy, stvořená jako klidné útočiště pro práci i odpočinek. Věříme, že skvělá káva je základem každého úspěšného projektu, a proto s vášní připravujeme každý šálek. Naším cílem je poskytnout vám nejen prvotřídní nápoje, ale i nerušené prostředí, kde se rodí ty nejlepší nápady.
            </p>
          </div>
        </section>

        {/* Services / Menu Section */}
        <section id="nabidka" className="py-24 sm:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Naše Speciality</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-400">Každý nápoj je pečlivě sestaven tak, aby nastartoval vaši produktivitu.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="border border-[#D4AF37]/20 p-8 rounded-lg text-center bg-[#1A1A1A]">
                <h3 className="text-2xl font-serif font-semibold text-[#D4AF37] mb-3">Debuggovací Doppio</h3>
                <p className="text-gray-400">Dvojitá dávka espressa pro intenzivní soustředění a rychlé řešení problémů.</p>
              </div>
              <div className="border border-[#D4AF37]/20 p-8 rounded-lg text-center bg-[#1A1A1A]">
                <h3 className="text-2xl font-serif font-semibold text-[#D4AF37] mb-3">Algoritmické Americano</h3>
                <p className="text-gray-400">Čistá a silná káva pro čisté a efektivní myšlení. Ideální pro dlouhé sezení.</p>
              </div>
              <div className="border border-[#D4AF37]/20 p-8 rounded-lg text-center bg-[#1A1A1A]">
                <h3 className="text-2xl font-serif font-semibold text-[#D4AF37] mb-3">Frontend Flat White</h3>
                <p className="text-gray-400">Dokonale vyvážená a sametově jemná káva pro pixel-perfect výsledky.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-24 sm:py-32 bg-[#1A1A1A]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Navštivte nás</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-400">Jsme tu pro vás každý všední den. Zastavte se na kávu nebo kus řeči.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
              <div className="flex flex-col items-center">
                <Icon name="map-pin" className="w-10 h-10 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Adresa</h3>
                <p className="text-gray-300">Bugfixová 1<br/>110 00 Praha 1</p>
              </div>
              <div className="flex flex-col items-center">
                 <Icon name="phone" className="w-10 h-10 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Telefon</h3>
                <a href="tel:+420777123456" className="text-gray-300 hover:text-[#D4AF37] transition-colors">+420 777 123 456</a>
              </div>
              <div className="flex flex-col items-center">
                 <Icon name="mail" className="w-10 h-10 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl font-serif font-semibold text-white mb-2">Email</h3>
                <a href="mailto:test@kavarna.cz" className="text-gray-300 hover:text-[#D4AF37] transition-colors">test@kavarna.cz</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; ${new Date().getFullYear()} Kavárna U Kódu. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-sm">
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Vytvořeno s láskou od DigitalFusion</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        /* Add a subtle grid pattern for the background */
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Inter:wght@400;500&display=swap');
        .font-serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .font-sans {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}