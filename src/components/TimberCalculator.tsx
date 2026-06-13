import React, { useState } from 'react';
import { Calculator, Trees, ArrowRight, Table, Milestone, HelpCircle, FileSpreadsheet } from 'lucide-react';

type WoodVariant = 'eucalipto' | 'pinus';

export default function TimberCalculator() {
  const [activeCalc, setActiveCalc] = useState<'mouroes' | 'cubagem' | 'taubas'>('mouroes');
  const [variant, setVariant] = useState<WoodVariant>('eucalipto');

  // Mourões States
  const [fenceLength, setFenceLength] = useState<number>(500);
  const [postSpacing, setPostSpacing] = useState<number>(2.5);
  const [mouroaoSpacing, setMouroaoSpacing] = useState<number>(50); // post reforçado a cada 50m

  // Cubagem States
  const [thickness, setThickness] = useState<number>(5); // e.g., 5cm (2 polegadas)
  const [width, setWidth] = useState<number>(15); // e.g., 15cm
  const [length, setLength] = useState<number>(3); // e.g., 3 metros
  const [quantity, setQuantity] = useState<number>(50);

  // Tábuas States
  const [boardWidth, setBoardWidth] = useState<string>('30'); // 30cm (12") ou 25cm (10")
  const [boardLength, setBoardLength] = useState<number>(3); // 3m
  const [boardQty, setBoardQty] = useState<number>(100);

  // Calcular Mourões
  const numPosts = Math.ceil(fenceLength / postSpacing) + 1;
  const numMouroesReforcados = Math.ceil(fenceLength / mouroaoSpacing) + 1;
  const totalPosts = numPosts + numMouroesReforcados;

  // Calcular Cubagem (m3)
  // Espessura (m) * Largura (m) * Comprimento (m) * Qtd
  const cubicMeters = ((thickness / 100) * (width / 100) * length * quantity);
  const estimatedWeight = Math.round(cubicMeters * (variant === 'eucalipto' ? 750 : 500)); // Eucalipto ~750kg/m³, Pinus ~500kg/m³

  // Calcular Tábuas
  const boardCubicMeters = ((2.5 / 100) * (parseFloat(boardWidth) / 100) * boardLength * boardQty);
  const boardLinearMeters = boardLength * boardQty;

  const handleWhatsAppSend = () => {
    let message = '';
    if (activeCalc === 'mouroes') {
      message = `Olá Leniar! Simulei meu cercamento no site corporativo:\n` +
                `- Comprimento da Cerca: ${fenceLength}m\n` +
                `- Espaçamento entre Mourões: ${postSpacing}m\n` +
                `- Estimativa Calculada: ${numPosts} estacas (${variant === 'eucalipto' ? 'Eucalipto Tratado' : 'Pinus Autoclavado'}) + ${numMouroesReforcados} Mourões Mestres.\n` +
                `Gostaria de um orçamento detalhado de frete e preços para Tibagi-PR.`;
    } else if (activeCalc === 'cubagem') {
      message = `Olá Leniar! Calculei a cubagem de vigamento no site:\n` +
                `- Madeira: ${variant === 'eucalipto' ? 'Eucalipto Estrutural' : 'Pinus Comum/Beneficiado'}\n` +
                `- Dimensões: ${thickness}cm x ${width}cm x ${length}m\n` +
                `- Quantidade: ${quantity} unidades\n` +
                `- Cubagem Total Estimada: ${cubicMeters.toFixed(3)} m³ | Peso estimado: ~${estimatedWeight}kg\n` +
                `Gostaria de solicitar um orçamento para este lote de madeiramento.`;
    } else {
      message = `Olá Leniar! Calculei tábuas para fôrma/construção civil no site:\n` +
                `- Dimensões: Tábuas de Espessura 2.5cm (1") x Largura ${boardWidth}cm x Comprimento ${boardLength}m\n` +
                `- Quantidade solicitada: ${boardQty} peças\n` +
                `- Volume Linear: ${boardLinearMeters} metros lineares | Cubagem: ${boardCubicMeters.toFixed(3)} m³\n` +
                `Gostaria de consultar a disponibilidade no pátio de Tibagi-PR e opções de entrega.`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5542988869655?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-stone-55 border-y border-stone-200/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-forest-600 uppercase">
            Engenharia & Soluções Práticas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Simulador de Madeiramento & Cubagem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Otimize seu planejamento financeiro. Escolha o tipo de projeto florestal abaixo, simule o volume necessário e envie os dados diretamente para nossos vendedores agilizarem sua cotação.
          </p>
          <div className="h-1.5 w-24 bg-wood-600 mx-auto rounded-full"></div>
        </div>

        {/* Outer Frame */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Input Panel */}
          <div className="lg:col-span-8 p-6 sm:p-10 space-y-8">
            
            {/* Calculation Type Tabs */}
            <div className="grid grid-cols-3 gap-2 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveCalc('mouroes')}
                className={`py-3 px-2 rounded-lg font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeCalc === 'mouroes'
                    ? 'bg-white text-forest-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Milestone className="w-4 h-4 text-wood-600" />
                <span className="text-center sm:text-left leading-none uppercase tracking-wide">Cercamento Rural</span>
              </button>
              
              <button
                onClick={() => setActiveCalc('cubagem')}
                className={`py-3 px-2 rounded-lg font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeCalc === 'cubagem'
                    ? 'bg-white text-forest-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Table className="w-4 h-4 text-forest-600" />
                <span className="text-center sm:text-left leading-none uppercase tracking-wide">Vigamentos / Cubagem</span>
              </button>
              
              <button
                onClick={() => setActiveCalc('taubas')}
                className={`py-3 px-2 rounded-lg font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeCalc === 'taubas'
                    ? 'bg-white text-forest-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4 text-forest-600" />
                <span className="text-center sm:text-left leading-none uppercase tracking-wide">Tábuas & Fôrmas</span>
              </button>
            </div>

            {/* General Variant Selector (eucalipto vs pinus) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-stone-100">
              <div>
                <h4 className="font-display font-bold text-slate-800 text-sm">Selecione a Espécie de Madeira</h4>
                <p className="text-xs text-slate-500">Influencia no comportamento estrutural e peso físico estimado do frete.</p>
              </div>
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setVariant('eucalipto')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    variant === 'eucalipto'
                      ? 'bg-forest-50 border-forest-600 text-forest-700 font-extrabold'
                      : 'border-stone-250 text-slate-600 hover:bg-stone-50'
                  }`}
                >
                  🍃 Eucalipto Estrutural
                </button>
                <button
                  type="button"
                  onClick={() => setVariant('pinus')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    variant === 'pinus'
                      ? 'bg-wood-50 border-wood-600 text-wood-700 font-extrabold'
                      : 'border-stone-250 text-slate-600 hover:bg-stone-50'
                  }`}
                >
                  🪵 Pinus Industrial
                </button>
              </div>
            </div>

            {/* TAB CALC 1: Mourões e Cercas */}
            {activeCalc === 'mouroes' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Comprimento da Cerca */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase">
                      <span>Comprimento Total (Metros)</span>
                      <span className="text-forest-600 font-mono text-sm">{fenceLength}m</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={fenceLength}
                      onChange={(e) => setFenceLength(parseInt(e.target.value))}
                      className="w-full h-2 bg-stone-150 rounded-lg appearance-none cursor-pointer accent-forest-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>50 metros</span>
                      <span>5 km</span>
                    </div>
                  </div>

                  {/* Espaçamento entre estacas simples */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase">
                      <span>Espaçamento de Estacas Secundárias</span>
                      <span className="text-forest-600 font-mono text-sm">{postSpacing}m</span>
                    </div>
                    <input
                      type="range"
                      min="1.5"
                      max="4"
                      step="0.5"
                      value={postSpacing}
                      onChange={(e) => setPostSpacing(parseFloat(e.target.value))}
                      className="w-full h-2 bg-stone-150 rounded-lg appearance-none cursor-pointer accent-forest-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>1.5m</span>
                      <span>4.0m (Mais esparso)</span>
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200/50 flex gap-3 text-stone-700">
                  <HelpCircle className="w-5 h-5 text-wood-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-light leading-relaxed">
                    <strong>Dica de Cercamento em Autoclave:</strong> Mourões estacas convencionais usam diâmetro de 8 a 12cm. A cada {mouroaoSpacing} metros de esticador, recomenda-se colocar um Mourão Mestre ("Esticador" grosso de 14 a 18cm) para suportar a tensão dos fios de arame.
                  </p>
                </div>
              </div>
            )}

            {/* TAB CALC 2: Cubagem Geral */}
            {activeCalc === 'cubagem' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Espessura (cm) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Espessura (cm)</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={thickness}
                      onChange={(e) => setThickness(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-sm font-semibold"
                    />
                  </div>

                  {/* Largura (cm) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Largura / bitola (cm)</label>
                    <input
                      type="number"
                      min="5"
                      max="100"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-sm font-semibold"
                    />
                  </div>

                  {/* Comprimento (m) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Comprimento (m)</label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={length}
                      onChange={(e) => setLength(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-sm font-semibold"
                    />
                  </div>

                  {/* Quantidade (peças) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Quantidade (pçs)</label>
                    <input
                      type="number"
                      min="1"
                      max="5000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-sm font-semibold"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setThickness(2.5); setWidth(15); setLength(3); }}
                    className="p-2 border border-stone-200 hover:border-slate-400 rounded-lg text-center text-xs font-medium cursor-pointer"
                  >
                    Caibro 2.5x15cm (3m)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setThickness(5); setWidth(15); setLength(4); }}
                    className="p-2 border border-stone-200 hover:border-slate-400 rounded-lg text-center text-xs font-medium cursor-pointer"
                  >
                    Prancha 5x15cm (4m)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setThickness(7.5); setWidth(20); setLength(6); }}
                    className="p-2 border border-stone-200 hover:border-slate-400 rounded-lg text-center text-xs font-medium cursor-pointer"
                  >
                    Viga Pesada 7.5x20cm (6m)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setThickness(2.5); setWidth(30); setLength(3); }}
                    className="p-2 border border-stone-200 hover:border-slate-400 rounded-lg text-center text-xs font-medium cursor-pointer"
                  >
                    Tábua 2.5x30cm (3m)
                  </button>
                </div>
              </div>
            )}

            {/* TAB CALC 3: Tábuas e Fôrmas */}
            {activeCalc === 'taubas' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Largura da Tábua (10" ou 12") */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">Largura Disponível (Padrão)</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setBoardWidth('30')}
                        className={`flex-1 py-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          boardWidth === '30'
                            ? 'bg-forest-600 border-forest-600 text-white font-extrabold'
                            : 'border-stone-250 text-slate-700 hover:bg-stone-50'
                        }`}
                      >
                        12 Polegadas (30cm)
                      </button>
                      <button
                        type="button"
                        onClick={() => setBoardWidth('25')}
                        className={`flex-1 py-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          boardWidth === '25'
                            ? 'bg-forest-600 border-forest-600 text-white font-extrabold'
                            : 'border-stone-250 text-slate-700 hover:bg-stone-50'
                        }`}
                      >
                        10 Polegadas (25cm)
                      </button>
                    </div>
                  </div>

                  {/* Comprimento da Tábua */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Comprimento (m)</label>
                    <select
                      value={boardLength}
                      onChange={(e) => setBoardLength(parseInt(e.target.value))}
                      className="w-full px-3 py-3 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-xs sm:text-sm font-semibold bg-white cursor-pointer"
                    >
                      <option value={3}>3.00 Metros (Padrão Serraria)</option>
                      <option value={4}>4.00 Metros</option>
                      <option value={5}>5.00 Metros</option>
                      <option value={6}>6.00 Metros (Sob Encomenda)</option>
                    </select>
                  </div>

                  {/* Quantidade */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Qtd de Tábuas (Peças)</label>
                    <input
                      type="number"
                      min="5"
                      max="10000"
                      value={boardQty}
                      onChange={(e) => setBoardQty(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2.5 border border-stone-250 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-600 text-sm font-semibold"
                    />
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-forest-50/60 border border-forest-100 flex gap-3 text-stone-700">
                  <Trees className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-light leading-relaxed">
                    <strong>Área de Cobertura das Fôrmas:</strong> As tábuas de pinus de 1"x12" (com 2.5cm de espessura e 30cm de largura) são ideais para fôrma de concreto armado em vigas aéreas e colunas estruturais em Tibagi e Campos Gerais.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Calculations Outputs Summary */}
          <div className="lg:col-span-4 forest-gradient text-white p-6 sm:p-10 flex flex-col justify-between space-y-8 relative">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-wood-200">
                <Calculator className="w-3.5 h-3.5" />
                Resumo Técnico Estimado
              </div>

              {/* Conditional outputs details */}
              {activeCalc === 'mouroes' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Total Mourões Estacas</p>
                    <p className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-none">
                      {numPosts} <span className="text-lg font-light text-wood-200">peças</span>
                    </p>
                  </div>
                  
                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Mourões Mestres (14-18cm)</p>
                    <p className="text-2xl sm:text-3xl font-display font-extrabold text-wood-300">
                      {numMouroesReforcados} <span className="text-xs font-light text-stone-300">reforçados</span>
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Carga Estimada do Lote</p>
                    <p className="text-sm font-semibold text-stone-200">
                      Material recomendado: <span className="text-white font-bold">{variant === 'eucalipto' ? 'Eucalipto Tratado' : 'Pinus Autoclavado'}</span>
                    </p>
                    <p className="text-xs text-stone-400">Dimensões indicadas de fábrica: Ø 8 a 12cm por 2,20m de altura.</p>
                  </div>
                </div>
              )}

              {activeCalc === 'cubagem' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Cubagem Total do Lote</p>
                    <p className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-none">
                      {cubicMeters.toFixed(3)} <span className="text-lg font-light text-wood-200">m³</span>
                    </p>
                  </div>
                  
                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Peso Físico Estimado</p>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      ~{estimatedWeight.toLocaleString('pt-BR')} <span className="text-base font-light text-stone-300">kg</span>
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Metragem Linear</p>
                    <p className="text-lg font-bold text-wood-200">
                      {(length * quantity).toLocaleString('pt-BR')} <span className="text-sm font-light text-stone-300">metros lineares</span>
                    </p>
                  </div>
                </div>
              )}

              {activeCalc === 'taubas' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Metragem Linear de Tábuas</p>
                    <p className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-none">
                      {boardLinearMeters} <span className="text-lg font-light text-wood-200">metros</span>
                    </p>
                  </div>
                  
                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Cubagem Estimada (m³)</p>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {boardCubicMeters.toFixed(3)} <span className="text-sm font-light text-stone-300">m³</span>
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">Detalhe Comercial</p>
                    <p className="text-sm text-stone-250 leading-relaxed font-light">
                      Lote contendo <span className="text-white font-bold">{boardQty} peças</span> de espessura de 2.5cm por largura de {boardWidth}cm.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Direct Send Buttons of calculated block */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20ba5a] text-white font-bold py-4 rounded-xl cursor-pointer hover:shadow-lg hover:scale-103 active:scale-97 transition-all text-sm uppercase tracking-wide"
              >
                Cotação por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-stone-400 text-center font-light leading-relaxed">
                * As estimativas são baseadas na densidade padrão e fatores de cálculo industrial de autoclave para o Paraná. O frete final depende da cubagem e acesso.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
