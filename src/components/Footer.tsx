import React from 'react';
import { TreeDeciduous, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-forest-950 text-stone-300 border-t border-forest-900 overflow-hidden pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-forest-900">
          
          {/* Brand details */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-2 group"
            >
              <div className="p-2 rounded-lg bg-forest-650 text-white">
                <TreeDeciduous className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-lg tracking-wider uppercase leading-none">
                  Leniar
                </span>
                <span className="text-[10px] tracking-widest text-wood-200 uppercase font-semibold">
                  Madeiras
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Sólida atuação na extração sustentável, beneficiamento refinado, tratamento em autoclave e escoamento pontual de madeiras. Leniar — Soluções integradas de Pinus e Eucalipto. Sediada em Alto do Amparo – Tibagi, Paraná.
            </p>
          </div>

          {/* Quick links sitemap */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">Atalhos do Site</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-wood-200 transition-colors"
                >
                  Início (Apresentação)
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-wood-200 transition-colors"
                >
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a 
                  href="#produtos" 
                  onClick={(e) => handleNavClick(e, '#produtos')}
                  className="hover:text-wood-200 transition-colors"
                >
                  Divisões de Madeira
                </a>
              </li>
              <li>
                <a 
                  href="#autoclave" 
                  onClick={(e) => handleNavClick(e, '#autoclave')}
                  className="hover:text-wood-200 transition-colors"
                >
                  Tratamento Autoclave
                </a>
              </li>
              <li>
                <a 
                  href="#logistica" 
                  onClick={(e) => handleNavClick(e, '#logistica')}
                  className="hover:text-wood-200 transition-colors"
                >
                  Frota de Logística
                </a>
              </li>
              <li>
                <a 
                  href="#calculadora" 
                  onClick={(e) => handleNavClick(e, '#calculadora')}
                  className="hover:text-wood-200 transition-colors pointer-events-auto"
                >
                  Simulador de Cubagem
                </a>
              </li>
            </ul>
          </div>

          {/* Business Details info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">Atendimento Administrativo</h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400 font-light max-w-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-wood-200 flex-shrink-0 mt-0.5" />
                <p>Distrito de Alto do Amparo – Tibagi-PR, CEP: 84300-000</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-wood-200 flex-shrink-0" />
                <p>+55 (42) 98886-9655</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-wood-200 flex-shrink-0" />
                <p>contato@leniarmadeiras.com.br</p>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate footer details */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500 font-light">
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} Leniar Madeiras Ltda. Todos os direitos reservados.</p>
            <p>Alto do Amparo, Tibagi - Paraná. CNPJ: 00.000.000/0001-00 (Demonstrativo)</p>
          </div>
          <div>
            <p className="text-stone-600">
              Desenvolvido em total conformidade com diretrizes SEO & UI/UX Responsivo
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
