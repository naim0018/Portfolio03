import React from "react";
import { Link } from "react-router-dom";
import { useGetPortfolioDetails } from "@/hooks/useGetPortfolioDetails";

export default function Projects() {
  const { data } = useGetPortfolioDetails();
  
  const defaultProjects = [
    {
      title: "Nexus Analytics",
      description: "A comprehensive financial dashboard providing real-time data visualization and predictive analytics for enterprise clients.",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf_XsxJlIbyuEqMWnzmBSOvOu2w7aunObAKiJ8feIUa2443FPADOoxDlwhYo3ZGpnd9O1TDTNNjd74BBrpDnEMTpii61g0v8RPRg89lDzRcTODzGwr5eAHoSOMn2sLMruS0UpBzxQ880usVBQnQQgiYqmmZVZ021sISnoYMaauVWIs9cjXXnmjqRo4t42Zb86H6pznYa9ASA8QimTtHsnuhV4rsmhaLgPDp6XzyYl6HjGF9OwPuY5zNMmoa9EPjrkXBg5HEHwY5uh2",
      tags: ["React", "TypeScript", "ChartJS"],
    },
    {
      title: "Lumina Market",
      description: "A high‑performance e‑commerce solution focused on minimal friction and maximum conversion with headless architecture.",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-o-MP2mMBuBdKJbor5Mtg9HkWDZZJNHskc0zU8SvQ-oJpUniIGOeF91kHlOC8oRKFGQvL0GSlPmE6Lw2KQANyhOT8GHdi9arXPt5YQmhqige0_EM725jIX8YsPbi-wHxbgzNNsEnWBJuqTh2ttxHA-s-_J7gTH9MjxgbTNnJ1OUal2NG3Ybqz2EosuTH3krYYaranx1RUDA-EjUN7VAKOvCWAQ2qfgs0e7Oz_u-LG8eubsPVP9irNwCtG2hOElougygFO5loudU8",
      tags: ["Next.js", "Stripe", "Prisma"],
    },
    {
      title: "Flow State",
      description: "A productivity suite designed for deep work. Features include Pomodoro timers, distraction blocking, and seamless task integration.",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6p25USDE72QFYvaW6RY8TepDWr53Bk0evOFGlKQWsZzPOm2FV7OteNdlC27Wg6gM1pQ2EHTaQloWHuQP-fEj8zTIuVd5kEoN_2k5uLraZF84IIsvYvpvaxpCoSa19pwBZUYam7MmeDLp9y6uWIFtbTzzcPWMI6wFvpTFNp1dPUUbn55lFMzpBhF1Pll74ApYl5DDA267jeBE6mptGISs_Ji2XoJWQRvl80eIhSYoTLmFIuI1r1iSIMVFVrsFHo6r-oXHgikEuSlD",
      tags: ["Vue 3", "Firebase", "Tailwind"],
    },
  ];

  const projects = data?.data?.projects || defaultProjects;

  return (
    <section className="py-24 px-6 relative animate-fadeIn" id="projects">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Selected Works
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              A curation of digital products focused on performance, aesthetics, and user experience.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest"
          >
            All Repositories
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="group relative">
               <Link 
                to={p.title === "Nexus Analytics" ? "/projects/nexus-analytics" : "#"} 
                className="block group relative rounded-3xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-accent/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-10 space-y-5 relative">
                  <div className="absolute -top-7 right-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined font-bold">
                      arrow_outward
                    </span>
                  </div>
                  <div className="flex gap-3 text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                    {p.tags.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span>{t}</span>
                        {idx < p.tags.length - 1 && <span className="text-slate-700">•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
