import React from "react";

export default function Contact() {
  return (
    <footer
      className="py-24 px-6 relative overflow-hidden animate-fadeIn"
      id="contact"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side – call to action */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I&apos;m currently available for freelance projects and open to
                full‑time opportunities.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-accent transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-slate-500">
                      Explore my code
                    </div>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-slate-600 group-hover:text-white transition-colors">
                    arrow_outward
                  </span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-accent transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-500">
                      Professional network
                    </div>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-slate-600 group-hover:text-white transition-colors">
                    arrow_outward
                  </span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1DA1F2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-accent transition-colors">
                      Twitter
                    </div>
                    <div className="text-xs text-slate-500">
                      Thoughts & updates
                    </div>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-slate-600 group-hover:text-white transition-colors">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side – contact form */}
          <div className="glass rounded-2xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-slate-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-slate-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-slate-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-900 font-bold py-4 rounded-lg hover:bg-slate-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Alex Davison. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Made with{" "}
            <span className="material-symbols-outlined text-xs text-red-500">
              favorite
            </span>{" "}
            and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
