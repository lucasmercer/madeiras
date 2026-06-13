import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, Hammer, TreePine, Milestone, Archive } from 'lucide-react';

type DivisionId = 'vigamento' | 'beneficiado' | 'autoclave' | 'industrial';

export default function Products() {
  const [activeTab, setActiveTab] = useState<DivisionId>('vigamento');

  const divisionsData = {
    vigamento: {
      title: 'Vigamentos Pesados & Peças Estruturais',
      subtitle: 'Estabilidade e suporte físico absoluto para coberturas e estruturas',
      description: 'Nossa área de vigamento estrutural produz vigas, pranchas, caibros e pilares robustos. Serrados sob rigoroso controle de conicidade e fibras a partir de toras selecionadas de Eucalyptus e Pinus, garantindo resistência à flexão e longa estabilidade dimensional para telhados, pergolados rústicos e grandes vãos livres.',
      imageUrl: 'https://images.unsplash.com/photo-1565192647048-f997ded879f0?q=80&w=2070&auto=format&fit=crop',
      specs: [
        { name: 'Disponibilidade', value: 'Vigas de até 6,00 metros de comprimento' },
        { name: 'Acabamentos', value: 'Madeira Bruta ou Aparelhada/Aplainada' },
        { name: 'Espécies recomendadas', value: 'Eucalyptus robusto e Pinus denso de reflorestamento' },
        { name: 'Resistência mecânica', value: 'Lotes inspecionados contra nós frouxos e fendas' }
      ],
      applications: [
        'Vigamentos estruturais pesados para telhados comerciais e residenciais',
        'Pranchas grossas de suporte para canteiros de obras e mezaninos',
        'Pilares retos para coberturas de garagens e quiosques campestres',
        'Vigas acessórias para estaleiros navais e escoramentos industriais'
      ],
      advantage: 'Fibras densas orientadas que minimizam o arqueamento sob carga contínua.',
      icon: Hammer
    },
    beneficiado: {
      title: 'Madeira Beneficiada para Obras & Acabamentos',
      subtitle: 'Cortes milimétricos calibrados de fácil manuseio no pátio da obra',
      description: 'O setor de beneficiamento e usinagem da Leniar processa tábuas de pinus nos padrões mais requisitados da construção civil: 1"x12" (largura de 30cm) e 1"x10" (largura de 25cm). Com faces paralelas perfeitas obtidas em serrarias automáticas de última geração, é a escolha número um para fôrmas de concreto limpas, tapumes e andaimes.',
      imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop',
      specs: [
        { name: 'Dimensões padrão', value: 'Espessura de 2.5cm por larguras de 25cm ou 30cm' },
        { name: 'Acabamento superficial', value: 'Faces limpas ideais para concreto aparente' },
        { name: 'Embalagem de envio', value: 'Lotes amarrados e paletizados por bitola idêntica' },
        { name: 'Teor de Umidade', value: 'Secagem assistida sob coberturas industriais' }
      ],
      applications: [
        'Fôrmas rígidas para concreto armado, vigas baldrames e colunas',
        'Tábuas de piso antiderrapante para andaimes de sustentação pesada',
        'Sarrafos, ripas e pontaletes de encaixe angular preciso',
        'Fechamentos externos rápidos de canteiros e tapumes de isolamento'
      ],
      advantage: 'Padronização dimensional total que reduz o tempo de montagem do carpinteiro.',
      icon: TreePine
    },
    autoclave: {
      title: 'Madeira Tratada em Autoclave (Mourões & Postes)',
      subtitle: 'Tratamento de vácuo-pressão com proteção química profunda',
      description: 'Nosso grande diferencial ecológico e industrial: tratamento vácuo-pressão em autoclave com compostos preservativos hidrossolúveis CCA certificados. Esse moderno ciclo de impregnação atua injetando os preservativos no cerne profundo da madeira, blindando estacas, postes e mourões contra cupim, caruncho e umidade corrosiva da terra úmida.',
      imageUrl: 'https://images.unsplash.com/photo-1487817041484-9fb56b464860?q=80&w=2070&auto=format&fit=crop',
      specs: [
        { name: 'Garantia de fábrica', value: 'Até 15 anos contra deterioração biológica' },
        { name: 'Bitolas disponíveis', value: 'Diâmetros de Ø 8cm a 22cm em variadas alturas' },
        { name: 'Preservante Químico', value: 'CCA de alta retenção reativa na lignina' },
        { name: 'Contatos diretos', value: 'Indicada para contato com solo, água e sol' }
      ],
      applications: [
        'Mourões rurais estacas para esticamento e cercamentos rurais no Paraná',
        'Postes cilíndricos estruturais para redes de energia e telefonia privada',
        'Pilares ornamentais rústicos de alta durabilidade para quiosques e decks',
        'Madeiras para contenção de solo úmido e dormentes ferroviários'
      ],
      advantage: 'Altíssima vida útil de campo, eliminando o desmatamento de madeiras nobres raras.',
      icon: Milestone
    },
    industrial: {
      title: 'Lotes Industriais para Embalagens & Paletes',
      subtitle: 'Peças sob medida para otimização de custos industriais e transporte',
      description: 'A divisão de fornecimento industrial da Leniar abastece fabricantes de embalagens pesadas, caixarias de exportação e indústrias de paletes de alta cubagem. Desenvolvemos peças serradas especiais a partir de Pinus bruto de reflorestamento, mantendo padrões constantes de secagem e cubagem rústica com altíssima agilidade.',
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop',
      specs: [
        { name: 'Contratos corporativos', value: 'Fornecimento contínuo agendado diário ou semanal' },
        { name: 'Dimensões flexíveis', value: 'Cortes sob medida conforme gabarito técnico do cliente' },
        { name: 'Tipos de madeira', value: 'Pinus de baixo custo estruturado para movimentação' },
        { name: 'Documentação Florestal', value: 'DOF e faturamento eletrônico completos' }
      ],
      applications: [
        'Produção de paletes sob padrão PBR ou sob medida de encaixe',
        'Caixarias de madeira bruta para transporte de peças e motores pesados',
        'Montagem de caixas para armazenamento de frutas e hortaliças no atacado',
        'Suportes de madeira secundária para escoramento em transportadoras'
      ],
      advantage: 'A melhor taxa de aproveitamento e custo em massa de fibra por m³ do Paraná.',
      icon: Archive
    }
  };

  const activeData = divisionsData[activeTab];

  return (
    <section id="produtos" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-forest-600 uppercase">
            Nossos Segmentos de Atuação
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Extração, Beneficiamento & Madeiramento Completo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Não somos uma simples madeireira de varejo. Somos um complexo industrial equipado para processar toras brutas, fabricar vigamentos sob medida e blindar madeiras em autoclave para atender grandes projetos.
          </p>
          <div className="h-1.5 w-24 bg-wood-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Interactive Switcher - Group Leniar Style */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-stone-100/85 border border-stone-200">
            {Object.keys(divisionsData).map((tabKey) => {
              const tab = tabKey as DivisionId;
              const TabIcon = divisionsData[tab].icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold tracking-wide text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-forest-600 text-white shadow-md'
                      : 'text-slate-700 hover:text-forest-600 hover:bg-stone-50'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap uppercase tracking-wider">
                    {tab === 'vigamento' ? 'Vigamento' :
                     tab === 'beneficiado' ? 'Beneficiados' :
                     tab === 'autoclave' ? 'Tratados (Postes)' :
                     'Industrial & Paletes'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Details Section with Elegant grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with details overlay */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative">
              <img
                src={activeData.imageUrl}
                alt={activeData.title}
                className="w-full h-[380px] sm:h-[480px] object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Spec Quick Sheet */}
            <div className="absolute -bottom-6 -right-6 lg:-right-4 bg-wood-900 text-white p-6 rounded-2xl shadow-2xl max-w-xs border border-wood-800">
              <p className="text-[10px] text-wood-200 uppercase tracking-widest font-extrabold mb-1">Garantia Leniar</p>
              <p className="font-display font-medium text-xs sm:text-sm leading-relaxed text-stone-100">
                "{activeData.advantage}"
              </p>
            </div>
          </div>

          {/* Right Column: Descriptions & Tech Data */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                {activeData.title}
              </h3>
              <p className="text-wood-600 text-xs sm:text-sm font-bold tracking-wider uppercase">
                {activeData.subtitle}
              </p>
              <div className="h-0.5 w-16 bg-forest-200"></div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light font-sans">
                {activeData.description}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">Especificações de Processamento</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeData.specs.map((spec) => (
                  <div key={spec.name} className="flex justify-between items-center p-3 rounded-lg bg-stone-50 border border-stone-200/50">
                    <span className="text-slate-500 font-medium text-xs sm:text-sm">{spec.name}:</span>
                    <span className="text-slate-800 font-bold text-xs sm:text-sm text-right leading-tight max-w-[180px]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">Aplicações Típicas de Sucesso</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeData.applications.map((app) => (
                  <div key={app} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm leading-tight font-light">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action to scroll to form or calculator */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#calculadora"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#calculadora')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-200 scroll-smooth shadow-md"
              >
                Abrir Simulador de Projetos
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center text-xs sm:text-sm text-forest-700 font-bold underline hover:text-forest-900"
              >
                Falar com Engenheiro de Vendas
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
