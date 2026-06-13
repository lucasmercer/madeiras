import React from 'react';
import { Mail, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const whatsappDirectLink = "https://wa.me/5542988869655?text=Olá!%20Gostaria%20de%20consultar%20disponibilidade%20e%20orçamentos%20de%20madeiramento.";

  return (
    <section id="contato" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-forest-600 uppercase">
            Canais de Atendimento
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fale Direto com Nosso Comercial
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Estamos prontos para atender suas necessidades. Entre em contato diretamente via WhatsApp para cotações imediatas de lotes, cubagem e prazos de entrega.
          </p>
          <div className="h-1.5 w-24 bg-wood-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Column 1: Contact Channels */}
          <div className="bg-stone-50 border border-stone-200/60 p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight font-display mb-2">
                Atendimento Rápido
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light mb-6">
                Clique nos canais abaixo para falar com nossa equipe comercial e logística.
              </p>

              <div className="space-y-4">
                
                {/* WhatsApp direct callout */}
                <a
                  href={whatsappDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all group cursor-pointer"
                >
                  <div className="p-3 bg-[#25D366] text-white rounded-lg group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Canal WhatsApp Comercial</h4>
                    <p className="text-forest-700 font-bold text-sm sm:text-base">+55 (42) 98886-9655</p>
                    <p className="text-slate-400 text-[10px] sm:text-xs">Clique para iniciar atendimento imediato</p>
                  </div>
                </a>

                {/* Direct Mail */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-150 shadow-xs">
                  <div className="p-3 bg-forest-600 text-white rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">E-mail Corporativo</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium">contato@leniarmadeiras.com.br</p>
                    <p className="text-slate-400 text-[10px]">Envio de propostas e editais comerciais</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-150 shadow-xs">
                  <div className="p-3 bg-slate-900 text-white rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Horário de Funcionamento</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium">Segunda a Sexta: 07:30 às 18:00</p>
                    <p className="text-stone-400 text-[10px]">Expedição de cargas até as 17:30</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                * Para cotações de lote de mourões rurais e vigamento, recomendamos simular preliminarmente os volumes utilizando o nosso simulador localizado acima.
              </p>
            </div>
          </div>

          {/* Column 2: Physical Location & Interactive Map Card */}
          <div className="bg-stone-50 border border-stone-200/60 p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight font-display mb-2">
                Nossa Sede
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light mb-6">
                Estamos sediados estrategicamente próximos à BR-376 para maior agilidade logística.
              </p>

              {/* Physical Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-150 shadow-xs mb-6">
                <div className="p-3 bg-wood-600 text-white rounded-lg mt-0.5 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Serraria e Pátio de Carga</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                    Alto do Amparo – Distrito Industrial <br />
                    Tibagi, Paraná – CEP: 84300-000 <br />
                    <span className="text-[10px] text-wood-600 font-bold block mt-1.5 tracking-wider uppercase">Fácil acesso para carretas</span>
                  </p>
                </div>
              </div>

              {/* Custom Styled Visual Map Card */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                {/* Map stand-in illustration */}
                <div className="relative h-48 bg-forest-50/50 flex flex-col justify-center items-center text-center p-6">
                  {/* Simulated Roads pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="50" x2="400" y2="250" stroke="#000" strokeWidth="8" />
                      <line x1="120" y1="0" x2="280" y2="300" stroke="#000" strokeWidth="4" />
                      <circle cx="200" cy="130" r="12" fill="#000" />
                    </svg>
                  </div>
                  
                  <div className="z-10 space-y-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-xs animate-bounce">
                      📍
                    </span>
                    <p className="text-xs font-bold text-slate-800 leading-none">Alto do Amparo, Tibagi-PR</p>
                    <p className="text-[10px] text-slate-500 max-w-xs mx-auto">
                      Posicionamento logístico privilegiado no Paraná, facilitando escoamentos rápidos para Ponta Grossa, Curitiba e Campos Gerais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Alto+do+Amparo,Tibagi,Paraná"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md"
              >
                Abrir no Google Maps
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
