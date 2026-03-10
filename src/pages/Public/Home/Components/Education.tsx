import React from "react";
import { useGetPortfolioDetails } from "@/hooks/useGetPortfolioDetails";

export default function Education() {
  const { data } = useGetPortfolioDetails();
  
  const defaultEducation = [
    {
      title: "Stanford University",
      degree: "Master of Computer Science",
      startDate: "2016",
      endDate: "2018",
    },
    {
      title: "MIT",
      degree: "Bachelor in Software Engineering",
      startDate: "2012",
      endDate: "2016",
    },
  ];

  const education = data?.data?.education || defaultEducation;

  return (
    <section className="py-24 px-6 animate-fadeIn" id="education">
      <div className="max-w-6xl mx-auto border-t border-white/5 pt-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Academic Foundation</h2>
            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Scholarly background and certifications.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu: any, i: number) => (
            <div key={i} className="group flex gap-6 p-8 rounded-[2rem] bg-slate-800/20 border border-white/5 hover:bg-slate-800/40 hover:border-white/10 transition-all">
              <div className="w-16 h-16 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                <span className="material-symbols-outlined text-3xl">
                  school
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 font-medium">{edu.title}</p>
                <div className="inline-block text-[10px] font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-full uppercase tracking-widest mt-2">
                  {edu.startDate} - {edu.endDate || "Present"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
