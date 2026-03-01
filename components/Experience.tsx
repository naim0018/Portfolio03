import React from "react";

type CareerItem = {
  role: string;
  dates: string;
  company: string;
  description: string;
};

type SkillItem = {
  name: string;
  level?: number;
};

type SkillSection = {
  title: string;
  icon: string;
  items: SkillItem[];
};

export default function Experience() {
  const career: CareerItem[] = [
    {
      role: "Senior Frontend Engineer",
      dates: "2021 - Present",
      company: "TechFlow Inc.",
      description:
        "Leading the frontend architecture migration to Next.js. Improved core web vitals by 40%. Mentoring junior developers and establishing design system standards.",
    },
    {
      role: "Web Developer",
      dates: "2019 - 2021",
      company: "Creative Agency X",
      description:
        "Developed award‑winning marketing sites for Fortune 500 clients. Specialized in WebGL interactions and high‑fidelity animations using GSAP.",
    },
    {
      role: "Junior Developer",
      dates: "2018 - 2019",
      company: "StartUp Hub",
      description:
        "Collaborated on the MVP of a SaaS product. Handled bug fixes and implemented new features in the React dashboard.",
    },
  ];

  const skillSections: SkillSection[] = [
    {
      title: "Frontend",
      icon: "code",
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 100 },
      ],
    },
    {
      title: "Backend",
      icon: "database",
      items: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Design",
      icon: "palette",
      items: [
        { name: "Figma & Prototyping" },
        { name: "Design Systems" },
        { name: "UI/UX Principles" },
        { name: "Adobe Creative Suite" },
      ],
    },
    {
      title: "DevOps",
      icon: "cloud",
      items: [
        { name: "AWS (S3, Lambda)" },
        { name: "Docker & Kubernetes" },
        { name: "CI/CD Pipelines" },
        { name: "Vercel / Netlify" },
      ],
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-slate-900/30 animate-fadeIn"
      id="experience"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Career History */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white mb-8">Career History</h2>
          <div className="relative pl-8 border-l border-slate-800 space-y-12">
            {career.map((c, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-slate-700 bg-background group-hover:border-accent group-hover:bg-accent transition-colors" />
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold text-white">
                      {c.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {c.dates}
                    </span>
                  </div>
                  <div className="text-accent text-sm font-medium">
                    {c.company}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pt-2">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Proficiency */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Proficiency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillSections.map((section, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      section.title === "Frontend"
                        ? "bg-blue-500/10 text-blue-400"
                        : section.title === "Backend"
                          ? "bg-green-500/10 text-green-400"
                          : section.title === "Design"
                            ? "bg-purple-500/10 text-purple-400"
                            : "bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {section.icon}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white">{section.title}</h4>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{item.name}</span>
                        {item.level !== undefined && <span>{item.level}%</span>}
                      </div>
                      {item.level !== undefined && (
                        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{
                              width: `${item.level}%`,
                              background:
                                section.title === "Frontend"
                                  ? "#38bdf8"
                                  : section.title === "Backend"
                                    ? "#22c55e"
                                    : "#a78bfa",
                            }}
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
