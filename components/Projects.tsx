import React from "react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Nexus Analytics",
      description:
        "A comprehensive financial dashboard providing real-time data visualization and predictive analytics for enterprise clients.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCf_XsxJlIbyuEqMWnzmBSOvOu2w7aunObAKiJ8feIUa2443FPADOoxDlwhYo3ZGpnd9O1TDTNNjd74BBrpDnEMTpii61g0v8RPRg89lDzRcTODzGwr5eAHoSOMn2sLMruS0UpBzxQ880usVBQnQQgiYqmmZVZ021sISnoYMaauVWIs9cjXXnmjqRo4t42Zb86H6pznYa9ASA8QimTtHsnuhV4rsmhaLgPDp6XzyYl6HjGF9OwPuY5zNMmoa9EPjrkXBg5HEHwY5uh2",
      tech: ["React", "TypeScript", "ChartJS"],
    },
    {
      title: "Lumina Market",
      description:
        "A high‑performance e‑commerce solution focused on minimal friction and maximum conversion with headless architecture.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-o-MP2mMBuBdKJbor5Mtg9HkWDZZJNHskc0zU8SvQ-oJpUniIGOeF91kHlOC8oRKFGQvL0GSlPmE6Lw2KQANyhOT8GHdi9arXPt5YQmhqige0_EM725jIX8YsPbi-wHxbgzNNsEnWBJuqTh2ttxHA-s-_J7gTH9MjxgbTNnJ1OUal2NG3Ybqz2EosuTH3krYYaranx1RUDA-EjUN7VAKOvCWAQ2qfgs0e7Oz_u-LG8eubsPVP9irNwCtG2hOElougygFO5loudU8",
      tech: ["Next.js", "Stripe", "Prisma"],
    },
    {
      title: "Flow State",
      description:
        "A productivity suite designed for deep work. Features include Pomodoro timers, distraction blocking, and seamless task integration. Built with offline‑first capabilities.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6p25USDE72QFYvaW6RY8TepDWr53Bk0evOFGlKQWsZzPOm2FV7OteNdlC27Wg6gM1pQ2EHTaQloWHuQP-fEj8zTIuVd5kEoN_2k5uLraZF84IIsvYvpvaxpCoSa19pwBZUYam7MmeDLp9y6uWIFtbTzzcPWMI6wFvpTFNp1dPUUbn55lFMzpBhF1Pll74ApYl5DDA267jeBE6mptGISs_Ji2XoJWQRvl80eIhSYoTLmFIuI1r1iSIMVFVrsFHo6r-oXHgikEuSlD",
      tech: ["Vue 3", "Firebase", "Tailwind"],
    },
  ];

  return (
    <section className="py-24 px-6 relative animate-fadeIn" id="projects">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Selected Works
            </h2>
            <p className="text-slate-400">
              A curation of my recent digital products.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            View GitHub{" "}
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const CardContent = (
              <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4 relative">
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg shadow-white/10 group-hover:scale-110 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    {p.tech.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span>{t}</span>
                        {idx < p.tech.length - 1 && <span>•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );

            // Wrap only the Nexus Analytics card with a Next.js Link
            return p.title === "Nexus Analytics" ? (
              <Link key={i} href="/projects/nexus-analytics" passHref>
                {CardContent}
              </Link>
            ) : (
              <div key={i}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
