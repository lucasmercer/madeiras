import React from 'react';
import { Leaf, Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-offwhite scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Underline Subheader */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-forest-600 uppercase">
            Nossa História e Valores
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Força, Respeito à Terra e <br className="hidden sm:block" />
            Compromisso com o Futuro
          </h2>
          <div className="h-1.5 w-24 bg-wood-600 mx-auto rounded-full"></div>
        </div>

        {/* Dual Block: Story vs Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Storytelling Visual Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop"
                alt="Reflorestamento de Pinus e Eucalipto no Paraná"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-4 border border-wood-100">
                <div className="bg-forest-600 text-white p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-tight">Sede em Alto do Amparo</h4>
                  <p className="text-slate-600 text-xs mt-1 font-medium">Tibagi, Paraná – Localização estratégica no polo florestal do sul.</p>
                </div>
              </div>
            </div>

            {/* Decorative rustic block behind */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-wood-200/40 rounded-full z-[-1] blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-200/30 rounded-3xl z-[-1] blur-3xl"></div>
          </div>

          {/* Right Column: Narrative & Persuasive Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight leading-snug">
                Sólida estrutura no beneficiamento, tratamento e logística de madeiras.
              </h3>
              <p className="text-slate-600 leading-relaxed font-light font-sans">
                Nascida e consolidada em <strong>Alto do Amparo, distrito de Tibagi-PR</strong>, a <strong>Leniar</strong> orgulha-se de gerenciar um fluxo produtivo vertical e integrado de ponta a ponta. Dominamos desde o manejo legalizado e sustentável em nossas florestas parceiras, passando pelo desdobro em serraria própria automatizada, produção de vigamentos robustos de alta bitola, até a blindagem química em autoclaves modernas e escoamento por frota pesada dedicada.
              </p>
              <p className="text-slate-600 leading-relaxed font-light font-sans">
                Atendemos de forma robusta e ágil a múltiplas frentes do mercado paranaense: fornecemos lotes calibrados de fôrmas, tábuas e escoras para a construção civil, postes estruturais ornamentais para arquitetura de decks e pergolados, mourões de alta durabilidade para esticamento agrícola de cercas e peças brutas sob medida para indústrias de embalagens e paletes. Tudo isso sob o mais estrito rigor socioambiental.
              </p>
            </div>

            {/* Key Value Point List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                <Leaf className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Respeito Ambiental</h4>
                  <p className="text-slate-500 text-xs mt-1">Reflorestamento rigoroso e processos sem desperdício.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                <ShieldCheck className="w-5 h-5 text-wood-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Segurança Jurídica</h4>
                  <p className="text-slate-500 text-xs mt-1">Madeiras rastreadas, licenciadas com certificação ecológica.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                <Award className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Qualidade Padrão</h4>
                  <p className="text-slate-500 text-xs mt-1">Inspeção detalhada de cada régua, viga e prancha.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-wood-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Prazos Cumpridos</h4>
                  <p className="text-slate-500 text-xs mt-1">Carregamento ágil suportado pela nossa própria estrutura logística.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic visual numbers banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-2xl bg-forest-900 text-white shadow-xl">
          <div className="text-center space-y-2 border-r border-forest-800 last:border-0">
            <p className="text-4xl font-extrabold text-wood-200">100%</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wide">Tratada em Autoclave</p>
          </div>
          <div className="text-center space-y-2 border-r border-forest-800 last:border-0">
            <p className="text-4xl font-extrabold text-wood-200">Própria</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wide">Frota de Transporte</p>
          </div>
          <div className="text-center space-y-2 border-r border-forest-800 last:border-0">
            <p className="text-4xl font-extrabold text-wood-200">Anos</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wide">De Tradição em Tibagi</p>
          </div>
          <div className="text-center space-y-2 last:border-0">
            <p className="text-4xl font-extrabold text-wood-200">Garantida</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wide">Contra cupim e umidade</p>
          </div>
        </div>

      </div>
    </section>
  );
}
