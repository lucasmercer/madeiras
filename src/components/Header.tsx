import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, TreeDeciduous } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Divisões', href: '#produtos' },
    { name: 'Autoclave', href: '#autoclave' },
    { name: 'Logística', href: '#logistica' },
    { name: 'Simulador', href: '#calculadora' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand / Leniar */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-forest-600 text-white' : 'bg-white/15 text-white'
            }`}>
              <TreeDeciduous className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider uppercase leading-none">
                Leniar
              </span>
              <span className={`text-[10px] tracking-widest font-semibold uppercase ${
                isScrolled ? 'text-forest-600' : 'text-wood-200'
              }`}>
                Madeiras
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-2 group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-forest-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-forest-600' : 'bg-wood-200'
                }`} />
              </a>
            ))}
          </nav>

          {/* Contact Direct CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5542988869655"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs tracking-wider uppercase transition-all duration-200 ${
                isScrolled
                  ? 'bg-forest-600 text-white hover:bg-forest-700 shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white hover:text-forest-900 border border-white/30'
              }`}
            >
              <Phone className="w-4 h-4" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 border-t border-slate-100 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-forest-50 hover:text-forest-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/5542988869655"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#25D366] text-white font-bold tracking-wide text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
