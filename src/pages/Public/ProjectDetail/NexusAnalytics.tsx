import { Link } from "react-router-dom";

export default function NexusAnalytics() {
  return (
    <div className="bg-background text-foreground animate-fadeIn">
      {/* Header / Hero */}
      <header className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 font-bold uppercase text-xs tracking-[0.2em] group">
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Portfolio
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-extrabold uppercase tracking-widest">
                Fintech Case Study
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-extrabold uppercase tracking-widest">
                Real-Time Dashboard
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Nexus <br /> <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
              A comprehensive financial intelligence platform providing real‑time multi-source data visualization and predictive modeling for high‑net‑worth enterprise clients.
            </p>
          </div>

          {/* Summary stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5 mb-16">
            <div className="space-y-2">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] block">
                Deliverable
              </span>
              <span className="text-white font-bold text-lg">Lead Frontend</span>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] block">
                Duration
              </span>
              <span className="text-white font-bold text-lg">6 Months (2024)</span>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] block">
                Platform
              </span>
              <span className="text-white font-bold text-lg">Web Application</span>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] block">
                Action
              </span>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-accent hover:text-white transition-all flex items-center gap-2 text-sm font-black uppercase tracking-wider group"
                >
                  Live Demo
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-3xl bg-slate-900 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
            <img
              alt="Nexus Analytics Prototype"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf_XsxJlIbyuEqMWnzmBSOvOu2w7aunObAKiJ8feIUa2443FPADOoxDlwhYo3ZGpnd9O1TDTNNjd74BBrpDnEMTpii61g0v8RPRg89lDzRcTODzGwr5eAHoSOMn2sLMruS0UpBzxQ880usVBQnQQgiYqmmZVZ021sISnoYMaauVWIs9cjXXnmjqRo4t42Zb86H6pznYa9ASA8QimTtHsnuhV4rsmhaLgPDp6XzyYl6HjGF9OwPuY5zNMmoa9EPjrkXBg5HEHwY5uh2"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <span className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span>
                Primary Interface Overview
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-40">
          <div className="grid md:grid-cols-[1fr_2fr] gap-20">
            <div className="space-y-4">
               <span className="text-[10px] text-accent font-black uppercase tracking-[0.4em]">01</span>
              <h2 className="text-3xl font-black text-white sticky top-40">
                The Core Problem
              </h2>
            </div>
            <div className="space-y-8 text-slate-400 leading-relaxed text-xl font-medium">
              <p>
                Fragmented financial data across legacy systems was causing massive operational friction. Clients were essentially "flying blind," relying on 24-hour delayed reports for millisecond-critical investment decisions.
              </p>
              <p>
                The challenge was creating a unified "Source of Truth" that could aggregate high-velocity WebSocket streams while maintaining a 99th percentile UI responsiveness.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-20">
            <div className="space-y-4">
              <span className="text-[10px] text-accent font-black uppercase tracking-[0.4em]">02</span>
              <h2 className="text-3xl font-black text-white sticky top-40">
                Architectural Approach
              </h2>
            </div>
            <div className="space-y-8 text-slate-400 leading-relaxed text-xl font-medium">
              <p>
                We built a strictly typed React architecture using RTK Query for state management and normalized caching. This allowed us to bridge the gap between static REST data and dynamic real-time streams.
              </p>
              <p>
                The visual layer utilized custom Canvas controllers to render millions of data points without the DOM overhead of standard SVG libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Focus */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 glss rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Key Innovation</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Predictive Cash Flow Modeling</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  We integrated an AI-driven forecasting engine that allowed CFOs to stress-test their liquidity against 10,000+ market scenarios in under 2 seconds.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {[
                    "Monte Carlo simulations integration",
                    "Millisecond anomaly detection",
                    "SOC2-compliant data transmission"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-white font-bold text-sm">
                      <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                        <span className="material-symbols-outlined text-xs">check</span>
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] overflow-hidden shadow-3xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                <img
                  alt="Forecasting Interface"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6p25USDE72QFYvaW6RY8TepDWr53Bk0evOFGlKQWsZzPOm2FV7OteNdlC27Wg6gM1pQ2EHTaQloWHuQP-fEj8zTIuVd5kEoN_2k5uLraZF84IIsvYvpvaxpCoSa19pwBZUYam7MmeDLp9y6uWIFtbTzzcPWMI6wFvpTFNp1dPUUbn55lFMzpBhF1Pll74ApYl5DDA267jeBE6mptGISs_Ji2XoJWQRvl80eIhSYoTLmFIuI1r1iSIMVFVrsFHo6r-oXHgikEuSlD"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Footer */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">End of Case Study</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Ready for the <br /> <span className="text-gradient">next challenge.</span></h2>
          <div className="pt-10">
            <Link to="/" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/5">
              Back to Home
              <span className="material-symbols-outlined font-black">home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
