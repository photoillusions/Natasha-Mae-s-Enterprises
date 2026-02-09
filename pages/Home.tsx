import React from 'react';
import { ChevronRight } from 'lucide-react';
import { VENUES } from '../constants';

const ProfessionalLogo = () => (
  <div className="flex flex-col items-center justify-center select-none">
    <div className="relative">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-[1px]">
        <div className="w-[1px] h-1.5 bg-white/40"></div>
      </div>
    </div>
    <div className="text-center">
      <h1 className="font-serif text-white text-3xl tracking-[0.2em] uppercase font-bold leading-none">Natasha Mae's</h1>
      <p className="text-[20px] text-white/50 tracking-[0.4em] uppercase font-bold mt-1.5">Enterprise</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <section className="relative min-h-[115vh] flex flex-col items-center justify-start overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/header-background.jpg" 
            className="w-full h-full object-cover opacity-45 animate-[ken-burns_30s_infinite_alternate]"
            alt="Luxury Estate" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-transparent to-stone-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl pt-32 pb-20">
          <div className="space-y-2 mb-12 animate-fadeInUp">
            <span className="text-white text-base md:text-lg uppercase tracking-[0.6em] font-light opacity-90 block leading-none mt-8">Natasha Mae's Enterprises</span>
            <h2 className="text-5xl md:text-7xl text-white font-bold leading-[1.1] tracking-tighter">
              A Trio of <br /><span className="font-serif italic text-white/80">Premier Destinations</span>
            </h2>
            <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto font-light italic leading-relaxed opacity-80">
              "From historic grandeur to modern elegance, our portfolio of curated venues offers the perfect setting for your next celebration."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fadeInUp max-w-5xl mx-auto scale-75 origin-top" style={{ animationDelay: '300ms' }}>
            {VENUES.map((venue) => (
              <a key={venue.id} href={`/venues#${venue.id}`} className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-stone-900 transition-all duration-700 hover:-translate-y-1">
                <img src={venue.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt={venue.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.3em]">{venue.location}</span>
                  <h4 className="text-white text-lg font-serif italic mt-1">{venue.name}</h4>
                </div>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            <a href="/venues" className="bg-white text-stone-950 px-16 py-6 uppercase text-[11px] font-black tracking-[0.5em] shadow-6xl hover:bg-emerald-400 transition-all active:scale-95 flex items-center gap-3">EXPLORE VENUES <ChevronRight className="w-4 h-4" /></a>
            <a href="/contact" className="text-white px-16 py-6 uppercase text-[11px] font-black tracking-[0.5em] border-2 border-white hover:bg-white hover:text-stone-950 transition-all active:scale-95">SCHEDULE CONSULTATION</a>
          </div>
        </div>
      </section>

      {/* Premier Venues Showcase */}
      <section className="py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="h-[1px] w-24 bg-stone-300"></div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-wide">Delaware Valley's Premier Event Destinations</h2>
              <div className="h-[1px] w-24 bg-stone-300"></div>
            </div>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Experience grandeur like never before. Natasha Mae's Enterprises offers luxury banquet halls across the Delaware Valley, crafted for unforgettable weddings, corporate events, and majestic celebrations.
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-24">
            <h3 className="text-center text-3xl md:text-4xl font-serif text-stone-900 mb-6 tracking-wide">
              PERFECTLY CRAFTED VENUES FOR EVERY OCCASION
            </h3>
            <p className="text-center text-stone-600 text-base max-w-2xl mx-auto mb-16">
              From dream weddings to milestone parties and corporate galas, our banquet halls adapt to your event.
            </p>

            {/* Interactive Venue Showcase */}
            <div className="relative group">
              <img 
                src="/images/venues/vault-ballroom.jpg" 
                alt="The Vault Ballroom Grand Hall" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              
              {/* Overlay sections */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 gap-0">
                <a href="/venues#vault" className="bg-stone-900/75 backdrop-blur-sm text-white py-6 text-center border-r border-white/10 hover:bg-emerald-900/90 transition-all group">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">The Grand Ballroom</p>
                </a>
                <a href="/venues#vault" className="bg-stone-900/75 backdrop-blur-sm text-white py-6 text-center border-r border-white/10 hover:bg-emerald-900/90 transition-all">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">Historic Vault Room</p>
                </a>
                <a href="/venues#liberty" className="bg-stone-900/75 backdrop-blur-sm text-white py-6 text-center border-r border-white/10 hover:bg-emerald-900/90 transition-all">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">Open-Air Patio</p>
                </a>
                <a href="/venues#vault" className="bg-stone-900/75 backdrop-blur-sm text-white py-6 text-center hover:bg-emerald-900/90 transition-all">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">Garden Runway</p>
                </a>
              </div>
            </div>
          </div>

          {/* Services Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-16 bg-stone-300"></div>
                <h3 className="text-3xl font-serif text-stone-900 tracking-wide">NATASHA MAE'S ENTERPRISES</h3>
              </div>
              <h4 className="text-xl font-bold text-emerald-800 uppercase tracking-[0.2em] mb-6">Elevate Your Business Events</h4>
              <p className="text-stone-600 leading-relaxed mb-6">
                Host product launches, seminars, award nights, or team-building sessions in a grand yet professional setting. Equipped with state-of-the-art presentation systems, soundproofing, and customized layouts, we redefine corporate hosting.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-800 font-bold mt-1">✓</span>
                  <span className="text-stone-600">Full-service event planning with dedicated Personal Event Manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-800 font-bold mt-1">✓</span>
                  <span className="text-stone-600">In-house Divine Dining catering with customizable menus</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-800 font-bold mt-1">✓</span>
                  <span className="text-stone-600">Natasha's Heavenly Designs for spectacular décor and floral arrangements</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-800 font-bold mt-1">✓</span>
                  <span className="text-stone-600">Three distinct venues across the Delaware Valley</span>
                </div>
              </div>
              <a href="/contact" className="inline-block bg-stone-950 text-white px-12 py-5 text-[11px] uppercase tracking-[0.4em] font-black hover:bg-emerald-900 transition-all shadow-xl">
                REQUEST CONSULTATION
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600" alt="Elegant wedding setup" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600" alt="Corporate event" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600" alt="Grand ballroom" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                <img src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=600" alt="Floral arrangements" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
