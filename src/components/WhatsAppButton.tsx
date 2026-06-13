import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Exibe o botão após rolar 300px para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappLink = "https://wa.me/5542988869655?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20madeiras.";

  return (
    <div
      id="whatsapp-floater"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <a
        href={whatsappLink}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 active:scale-95 group"
        title="Fale Conosco no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-100"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-white stroke-none" />
        <span className="font-semibold text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Fale Conosco!
        </span>
      </a>
    </div>
  );
}
