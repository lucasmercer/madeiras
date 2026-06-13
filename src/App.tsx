import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Autoclave from './components/Autoclave';
import Logistics from './components/Logistics';
import TimberCalculator from './components/TimberCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-offwhite selection:bg-forest-600 selection:text-white">
      {/* Cabeçalho de Navegação Dinâmica */}
      <Header />

      {/* Corpo Institucional Modular */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Autoclave />
        <Logistics />
        <TimberCalculator />
        <Contact />
      </main>

      {/* Rodapé da Empresa */}
      <Footer />

      {/* Botão Flutuante Permanente de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
