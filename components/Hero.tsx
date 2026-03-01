import React from "react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 animate-fadeIn"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Textual content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-accent font-medium tracking-wide text-sm uppercase">
              Full Stack Developer
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              <span className="text-gradient block">Alex</span>
              <span className="text-slate-500 block">Davison.</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            I craft high‑end digital experiences that blend{" "}
            <span className="text-slate-200">human‑centric design</span> with
            robust engineering. Currently building the future of web
            applications at{" "}
            <span className="underline decoration-slate-600 underline-offset-4 decoration-1">
              TechFlow
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all"
            >
              <span className="font-medium text-white">View Projects</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white transition-colors"
            >
              <span className="font-medium">Download Resume</span>
              <span className="material-symbols-outlined text-sm">
                download
              </span>
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              <i className="text-2xl">GH</i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="text-2xl">LI</i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="text-2xl">TW</i>
            </a>
          </div>
        </div>

        {/* Image/Profile */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
            <img
              alt="Alex Davison Profile"
              className="relative w-full h-full object-cover rounded-full border-2 border-slate-700/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBRLqUXqFLc19PvFZ0DSv8Gw7Aqb2GhCxypalDWPyRLOzQxoJnITIY1urXE0XEtxk19-h7gHHRZ8PjPsHl6KXMZmnBh8XasLkG2TwjVPq7rwNpWj5gK9w4KfyDTJRgMh-274xqWh6QQ_kDF3lz1PjfzgjFg0s77OMKIUR9kvwzft7iA6eNbTM_p_R4HXgCtrK0Q6mRBpMteT8ppDeBDvtf-N7GWT2fWGbF2fzYzrBGw4AIelpsT54WNjj4Q3l_5l0rh8l4_pFuMCbN"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
