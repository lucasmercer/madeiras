import React from 'react';
import { Truck, ShieldCheck, Pin, CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function Logistics() {
  return (
    <section id="logistica" className="py-24 bg-stone-100 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-forest-600 uppercase">
            Logística Inteligente & Ágil
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frota Própria e Distribuição no Paraná
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Eliminamos atrasos de transportadoras terceirizadas. Com caminhões próprios pesados e motoristas treinados no manuseio florestal, as madeiras da Leniar chegam impecáveis à sua obra ou galpão.
          </p>
          <div className="h-1.5 w-24 bg-wood-600 mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Split Visual block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Professional Logistics Copy */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug">
                Capacidade Máxima e Pontualidade Inabalável
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Compreendemos que a madeira é o alicerce crítico de obras, embalagens industriais e estruturas agropecuárias. Qualquer atraso prejudica cronogramas valiosos. É por isso que a <strong>Leniar Madeiras</strong> investe continuamente em uma frota de caminhões pesados dedicada exclusivamente ao transporte de nossas cargas.
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                Nossos veículos (compostos por caminhões robustos estruturados para carga de pranchas amarradas e tora longa) operam diretamente de nossa sede em Alto do Amparo, Tibagi-PR, com carregamento mecanizado rápido e amarração dupla de segurança certificada.
              </p>
            </div>

            {/* Grid of logistics pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-forest-600">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm">Carga Protegida</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Amarração dupla com cintas de alta capacidade e lonas de proteção contra chuva e umidade da estrada.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-wood-600">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm">Agendamento Flexível</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Entrega programada no horário exato de descarregamento do seu pantiógrafo ou guindaste.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-forest-600">
                  <Truck className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm">Frota Rígida</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Caminhões Volvo e VW próprios, mantidos sob rigorosa manutenção preventiva mecânica.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-wood-600">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm">Guia Florestal Completo</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Todas as cargas viajam com DOF (Documento de Origem Florestal) e notas fiscais eletrônicas em total legalidade.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Logistics map/truck route visual card */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop"
                alt="Logística de Madeiras no Estado do Paraná"
                className="w-full h-[400px] object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
