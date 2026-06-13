import React from 'react';
import { ShieldCheck, Flame, Droplets, ArrowRightLeft, Cpu, Settings, RefreshCw } from 'lucide-react';

export default function Autoclave() {
  const steps = [
    {
      num: '01',
      title: 'Carregamento e Vácuo Inicial',
      desc: 'As toras de pinus ou eucalipto são colocadas no cilindro hermético. Aplica-se um vácuo potente que retira o ar acumulado no interior das células profundas da madeira.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'Inundação sob Pressão',
      desc: 'O cilindro é inundado com a solução preservativa hidrossolúvel (geralmente CCA ou preservantes certificados), penetrando livremente no espaço vazio gerado pelo vácuo.',
      icon: Droplets,
    },
    {
      num: '03',
      title: 'Pressurização de Penetração',
      desc: 'Bombas hidráulicas elevam a pressão industrial a patamares altíssimos (até 14 kgf/cm²), empurrando a solução preservativa até o cerne profundo da madeira.',
      icon: Settings,
    },
    {
      num: '04',
      title: 'Vácuo Final e Fixação',
      desc: 'A pressão é aliviada e o líquido excedente recua. Aplica-se um vácuo final para sugar e bombear de volta o preservativo superficial, deixando a madeira pronta e selada.',
      icon: RefreshCw,
    }
  ];

  return (
    <section id="autoclave" className="py-24 bg-forest-900 text-white scroll-mt-12 overflow-hidden relative">
      {/* Visual background rings decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wood-700/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest-800/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-wood-200 uppercase">
            Tratamento sob Vácuo-Pressão
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Autoclavação Industrial de Proteção
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Entenda como transformamos madeiras comuns em componentes blindados de altíssima longevidade capazes de resistir ao soterramento, umidade e pragas naturais.
          </p>
          <div className="h-1.5 w-24 bg-wood-200 mx-auto rounded-full"></div>
        </div>

        {/* Dual Layout: Real image of autoclave machine vs steps list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Cylinder design graphic & credentials banner */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-forest-800 bg-forest-950">
              <img
                src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=2070&auto=format&fit=crop"
                alt="Autoclave Industrial de Tratamento de Madeira"
                className="w-full h-[320px] sm:h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-wood-600 rounded-full text-[10px] font-bold tracking-widest uppercase text-white mb-2">
                  Autoclave Leniar
                </span>
                <p className="font-display font-bold text-white text-base">Cilindro de Tratamento de Alta Capacidade</p>
              </div>
            </div>

            {/* Guarantee Callout Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-wood-700 to-wood-900 border border-wood-600 text-white shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-orange-200 flex-shrink-0" />
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-stone-150 leading-none">
                  Garantia de Até 15 Anos
                </h4>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm font-light leading-relaxed">
                Nossos produtos autoclavados saem com segurança biologia total. O preservativo químico reage com a celulose e a lignina da madeira tornando-a insolúvel em água, repelindo cupins, carunchos, brocas e fungos apodrecedores mesmo sob contato direto com terra úmida.
              </p>
            </div>
          </div>

          {/* Right: Steps of treatment process */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-wood-200">
              O Ciclo Tecnológico de Impregnação
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div 
                    key={step.num}
                    className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl bg-forest-950/50 border border-forest-800/40 hover:border-wood-600/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-mono text-3xl font-extrabold text-wood-500 opacity-80">{step.num}</span>
                      <div className="p-3 rounded-xl bg-forest-800 text-wood-200">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white">{step.title}</h4>
                      <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Highlight Banner: Sustainability & Durability ratio */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-white text-base sm:text-lg">Por que escolher Madeira Autoclavada Leniar?</h4>
            <p className="text-stone-300 text-xs sm:text-sm font-light">Evita o desmatamento precoce de espécies raras nativas na região do Paraná ao ampliar a vida útil de florestas de cultivo rápido.</p>
          </div>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-wood-600 hover:bg-wood-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Fazer Cotação Personalizada
          </a>
        </div>

      </div>
    </section>
  );
}
