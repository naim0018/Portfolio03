import React from "react";
import { useGetPortfolioDetails } from "@/hooks/useGetPortfolioDetails";

export default function Hero() {
  const { data, isLoading } = useGetPortfolioDetails();

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="animate-pulse text-slate-400 font-medium">
          Loading experience...
        </div>
      </section>
    );
  }

  const portfolio = data?.data;
  const name = portfolio?.name || "Alex Davison";
  const names = name.split(" ");
  const firstName = names[0];
  const lastName = names.slice(1).join(" ");

  const shortDescription =
    portfolio?.shortDescription || "Full Stack Developer";
  const longDescription =
    portfolio?.longDescription ||
    "I craft high‑end digital experiences that blend human‑centric design with robust engineering.";

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 animate-fadeIn"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
        {/* Textual content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-accent font-semibold tracking-widest text-sm uppercase">
              {shortDescription}
            </h2>
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
              <span className="text-gradient block">{firstName}</span>
              {lastName && (
                <span className="text-slate-500 block">{lastName}.</span>
              )}
            </h1>
          </div>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
            {longDescription}
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 text-slate-400 hover:text-white font-bold transition-colors"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-xl">
                download
              </span>
            </a>
          </div>

          <div className="flex gap-8 pt-10 text-slate-500">
            <a
              href="#"
              className="hover:text-white transition-all hover:scale-110"
            >
              <span className="font-bold text-lg">Github</span>
            </a>
            <a
              href="#"
              className="hover:text-white transition-all hover:scale-110"
            >
              <span className="font-bold text-lg">LinkedIn</span>
            </a>
            <a
              href="#"
              className="hover:text-white transition-all hover:scale-110"
            >
              <span className="font-bold text-lg">Twitter</span>
            </a>
          </div>
        </div>

        {/* Image/Profile */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            <img
              alt={name}
              className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out rotate-3 hover:rotate-0"
              src={
                portfolio?.profilePicture ||
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
