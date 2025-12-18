
import React from 'react';
import { Logo } from './components/Logo';
import { BookingSystem } from './components/BookingSystem';
import { ChatConcierge } from './components/ChatConcierge';
import { FACILITIES, NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500/30">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl border-b border-white/5"></div>
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center relative z-10">
          <Logo />
          <nav className="hidden lg:flex gap-10">
            {NAV_LINKS.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-400 hover:text-cyan-400 transition-all font-bold tracking-widest uppercase text-[11px] hover:scale-110"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="#booking"
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:brightness-110 text-white px-8 py-3 rounded-2xl font-bungee text-sm tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >
              RESERVAR
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - NO PHOTOS, JUST NEON AESTHETICS */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          {/* Abstract Neon Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-700"></div>
          </div>
          
          {/* Animated Grid lines for retro feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

          {/* Floating Neon Rectangles */}
          <div className="absolute top-[20%] left-[10%] w-64 h-64 border-2 border-cyan-500/30 rounded-[3rem] blur-sm animate-spin-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 border-2 border-pink-500/30 rounded-[4rem] blur-sm animate-spin-slow transition-transform duration-[10s] reverse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-ping"></span>
              <span className="text-xs font-black tracking-[0.4em] text-white uppercase">LAS PALMAS DE GRAN CANARIA</span>
            </div>
            
            <div className="space-y-4 mb-12">
              <h1 className="text-7xl md:text-[120px] font-bungee leading-[0.8] tracking-tighter text-white">
                PATINA EN
              </h1>
              <div className="relative inline-block">
                <span className="text-7xl md:text-[120px] font-bungee leading-[0.8] tracking-tighter bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                  EL FUTURO
                </span>
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-slate-300 mb-14 max-w-2xl font-light leading-relaxed">
              Bienvenidos a <span className="font-bold text-white border-b-2 border-pink-500">The Wheelhouse</span>. La experiencia definitiva sobre ruedas en Las Palmas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#booking" className="bg-white text-slate-950 px-12 py-6 rounded-[2rem] font-bungee text-2xl text-center hover:bg-cyan-400 transition-all shadow-2xl hover:scale-105 active:scale-95">
                SACAR TURNO
              </a>
              <a href="#facilities" className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 text-white px-12 py-6 rounded-[2rem] font-bungee text-2xl text-center hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                VER PISTAS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid - NO PHOTOS, CARD STYLE ONLY */}
      <section id="facilities" className="py-40 relative bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 text-center">
            <h2 className="text-6xl md:text-8xl font-bungee mb-6 text-white leading-none tracking-tighter">NUESTRAS <br/><span className="text-pink-500 italic">ZONAS</span></h2>
            <div className="h-1 w-32 bg-cyan-400 mx-auto rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {FACILITIES.map((facility, idx) => (
              <div 
                key={idx} 
                className="group relative h-[450px] rounded-[3.5rem] overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-xl transition-all hover:translate-y-[-15px] hover:border-cyan-500/30 hover:bg-slate-900/80 p-12 flex flex-col justify-between shadow-2xl"
              >
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {(facility as any).icon}
                </div>
                
                <div>
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mb-6 rounded-full group-hover:w-24 transition-all duration-700"></div>
                  <h3 className="text-4xl font-bungee mb-4 text-white leading-none uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">{facility.title}</h3>
                  <p className="text-slate-400 text-base font-medium leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Integration */}
      <section id="booking" className="py-32 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <BookingSystem />
        </div>
      </section>

      {/* Location - CENTERED ON CC LAS RAMBLAS */}
      <section id="location" className="py-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1">
            <h2 className="text-7xl font-bungee mb-12 text-white tracking-tighter leading-none">UBICACIÓN <br/><span className="text-cyan-400 italic">PREMIUM</span></h2>
            <div className="space-y-12">
              {[
                { icon: "🏢", label: "LOCALIZACIÓN", text: "CC Las Ramblas / Nivel 1" },
                { icon: "📍", label: "CIUDAD", text: "Las Palmas de Gran Canaria" },
                { icon: "📞", label: "TELÉFONO", text: "+34 928 123 456" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-3xl border border-white/10 group-hover:border-pink-500/50 transition-all shadow-xl">
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-black tracking-[0.4em] text-slate-500 uppercase">{item.label}</span>
                    <p className="text-2xl font-bold text-white mt-1 group-hover:text-pink-500 transition-colors">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-square rounded-[5rem] overflow-hidden border-4 border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.5042861217316!2d-15.441463123909062!3d28.1159827759501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40917637841961%3A0xc68e5470d06963f2!2sCentro%20Comercial%20Las%20Ramblas!5e0!3m2!1ses!2ses!4v1715433930000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              loading="lazy"
              title="Mapa CC Las Ramblas"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
          <Logo className="h-24" />
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.6em] text-center md:text-right">
              © 2024 THE WHEELHOUSE · CC LAS RAMBLAS · LAS PALMAS
            </p>
          </div>
        </div>
      </footer>

      <ChatConcierge />
    </div>
  );
};

export default App;
