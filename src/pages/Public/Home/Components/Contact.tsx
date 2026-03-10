import React from "react";

export default function Contact() {
  return (
    <footer
      className="py-24 px-6 relative overflow-hidden animate-fadeIn"
      id="contact"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left side – call to action */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Let's build <br /> <span className="text-accent"> something great.</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed max-w-md">
                I'm currently available for high‑impact freelance projects and interesting
                full‑time opportunities.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-bold uppercase tracking-widest">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Open for work
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">
                Connect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/60 hover:border-accent/40 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-accent transition-colors">
                      GitHub
                    </div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase">
                      Codebase
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/60 hover:border-accent/40 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">link</span>
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-accent transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase">
                      Network
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side – contact form */}
          <div className="glass rounded-[2rem] p-10 border border-white/10 shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label
                  className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all font-medium"
                />
              </div>

              <div className="space-y-3">
                <label
                  className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all font-medium"
                />
              </div>

              <div className="space-y-3">
                <label
                  className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1"
                  htmlFor="message"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-900 font-extrabold py-5 rounded-2xl hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/5"
              >
                Send Message
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
