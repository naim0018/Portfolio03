import React from "react";
import { useGetPortfolioDetails } from "@/hooks/useGetPortfolioDetails";

export default function Experience() {
  const { data } = useGetPortfolioDetails();
  
  const defaultExperience = [
    {
      title: "Senior Frontend Engineer at TechFlow Inc.",
      startDate: "2021",
      endDate: "Present",
      description: "Leading the frontend architecture migration to Next.js. Improved core web vitals by 40%. Mentoring junior developers and establishing design system standards.",
    },
    {
      title: "Web Developer at Creative Agency X",
      startDate: "2019",
      endDate: "2021",
      description: "Developed award‑winning marketing sites for Fortune 500 clients. Specialized in WebGL interactions and high‑fidelity animations using GSAP.",
    },
  ];

  const experience = data?.data?.experience || defaultExperience;

  interface SkillItem {
    name: string;
    level?: number;
  }

  interface SkillSection {
    title: string;
    icon: string;
    items: SkillItem[];
  }

  const skillSections: SkillSection[] = [
    {
      title: "Frontend",
      icon: "code",
      items: [
        { name: "React / Vite / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS V4", level: 100 },
      ],
    },
    {
      title: "Backend",
      icon: "database",
      items: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "RTK Query", level: 90 },
      ],
    },
    {
      title: "Design",
      icon: "palette",
      items: [
        { name: "Figma & Prototyping", level: 85 },
        { name: "Design Systems", level: 90 },
        { name: "Glassmorphism", level: 95 },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/10 animate-fadeIn" id="experience">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">
        {/* Career History */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Career Journey</h2>
            <p className="text-slate-500 font-medium">My professional evolution in software engineering.</p>
          </div>
          
          <div className="relative pl-10 border-l-2 border-slate-800/50 space-y-16">
            {experience.map((c: any, i: number) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[49px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-accent group-hover:scale-125 transition-all" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {c.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-slate-800/50 px-3 py-1 rounded-full">
                      {c.startDate} - {c.endDate || "Present"}
                    </span>
                  </div>
                  {/* Removed company as it's not in the backend */}
                  <p className="text-slate-400 leading-relaxed pt-2">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Proficiency */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Capabilities</h2>
            <p className="text-slate-500 font-medium">Core technical stack and domain knowledge.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillSections.map((section, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-800/30 hover:bg-slate-800/50 transition-all border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                    <span className="material-symbols-outlined font-bold text-2xl">
                      {section.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{section.title}</h4>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-tighter">
                        <span>{item.name}</span>
                        {item.level !== undefined && <span>{item.level}%</span>}
                      </div>
                      {item.level !== undefined && (
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all duration-1000 ease-out"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
