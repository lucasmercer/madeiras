import React from 'react';
import { ArrowRight, ShieldCheck, Truck, TreeDeciduous } from 'lucide-react';

export default function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16"
    >
      {/* Background Image with Deep Natural Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop"
          alt="Lumber Yard and Heavy Logistics"
          className="w-full h-full object-cover opacity-50 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient for ultimate text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-950/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-black/50"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copywriting */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-500/20 border border-forest-400/40 text-forest-100 text-xs sm:text-sm font-semibold uppercase tracking-wider animate-fade-in">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse"></span>
              Leniar Madeiras – Alto do Amparo, Tibagi-PR
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-display">
              Tecnologia, Robustez e <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-200 via-orange-300 to-forest-200">
                Soluções em Madeira
              </span>
            </h1>

            <p className="text-base sm:text-xl text-stone-200 max-w-3xl font-light leading-relaxed">
              Atendemos todos os segmentos: da extração de toras industriais ao beneficiamento refinado de tábuas, vigamentos robustos de grande porte para telhados, tratamento sob pressão em autoclave e escoamento pontual com nossa frota própria de caminhões pelo Paraná.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={(e) => handleExploreClick(e, '#produtos')}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-wood-600 to-wood-800 text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:from-wood-500 hover:to-wood-700 hover:scale-103 active:scale-97 transition-all duration-300 shadow-lg shadow-wood-950/40 text-sm sm:text-base cursor-pointer"
              >
                Conhecer Nossos Produtos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={(e) => handleExploreClick(e, '#contato')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/25 text-white border border-white/20 px-8 py-4 rounded-xl font-bold tracking-wide hover:scale-103 active:scale-97 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base cursor-pointer"
              >
                Solicitar Cotação Rápida
              </button>
            </div>
          </div>

          {/* Quick Credential Cards (As Floating Bento Cells) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            
            <div className="p-6 rounded-2xl bg-forest-900/45 border border-forest-700/35 backdrop-blur-md hover:border-forest-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-forest-500/20 text-wood-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">Durabilidade Máxima</h3>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed">
                    Tratamento industrial em autoclave com vácuo-pressão que blinda o eucalipto e o pinus contra pragas, umidade e fungos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-forest-900/45 border border-forest-700/35 backdrop-blur-md hover:border-forest-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-forest-500/20 text-orange-300">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">Logística Dedicada</h3>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed">
                    Frota de caminhões própria que garante agilidade inabalável no beneficiamento e na pontualidade das entregas pelo Paraná.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-forest-900/45 border border-forest-700/35 backdrop-blur-md hover:border-forest-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-forest-500/20 text-forest-200">
                  <TreeDeciduous className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">Manejo Sustentável</h3>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed">
                    Trabalhamos com reflorestamento planejado e processos de baixo impacto ambiental, valorizando a floresta.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Forest Silhouette bottom blend layer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-offwhite to-transparent pointer-events-none z-20"></div>
    </section>
  );
}
