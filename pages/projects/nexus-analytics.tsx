import React from "react";
import Nav from "../../components/Nav";
import Link from "next/link";

export default function NexusAnalytics() {
  return (
    <>
      <Nav />

      {/* Header / Hero */}
      <header className="pt-32 pb-16 px-6 relative" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium uppercase tracking-wider mb-6">
              Fintech Dashboard
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Nexus Analytics
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              A comprehensive financial dashboard providing real‑time data visualization and predictive analytics for enterprise
              clients, streamlining decision‑making processes by 40%.
            </p>
          </div>

          {/* Summary grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-800 mb-12">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Role
              </span>
              <span className="text-white font-medium">Lead Frontend Engineer</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Timeline
              </span>
              <span className="text-white font-medium">Aug 2023 - Jan 2024</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Team
              </span>
              <span className="text-white font-medium">3 Devs, 1 Designer, 1 PM</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Links
              </span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-accent hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  Live Demo
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  GitHub
                  <span className="material-symbols-outlined text-sm">code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
            <img
              alt="Nexus Analytics Dashboard Hero"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf_XsxJlIbyuEqMWnzmBSOvOu2w7aunObAKiJ8feIUa2443FPADOoxDlwhYo3ZGpnd9O1TDTNNjd74BBrpDnEMTpii61g0v8RPRg89lDzRcTODzGwr5eAHoSOMn2sLMruS0UpBzxQ880usVBQnQQgiYqmmZVZ021sISnoYMaauVWIs9cjXXnmjqRo4t42Zb86H6pznYa9ASA8QimTtHsnuhV4rsmhaLgPDp6XzyYl6HjGF9OwPuY5zNMmoa9EPjrkXBg5HEHwY5uh2"
            />
          </div>
        </div>
      </header>

      {/* The Challenge */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white sticky top-32">
                The Challenge
              </h2>
            </div>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Enterprise clients were struggling with fragmented financial data dispersed across multiple
                legacy systems. The lack of a unified view led to delayed reporting and missed investment opportunities.
              </p>
              <p>
                The primary objective was to aggregate these disparate data sources into a single, cohesive interface that could
                handle high‑frequency updates without compromising performance. We needed to visualize complex datasets in a way
                that was instantly digestible for C‑suite executives.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white sticky top-32">
                The Solution
              </h2>
            </div>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                We engineered a modular dashboard architecture using React and TypeScript. By leveraging WebSockets for real‑time
                data transport, we ensured that the analytics displayed were always current within milliseconds.
              </p>
              <p>
                For visualization, we implemented a custom wrapper around ChartJS, optimizing canvas rendering for large datasets.
                The UI was designed with a “dark mode first” approach to reduce eye strain during long periods of analysis, using
                high‑contrast accent colors for critical alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-3xl font-bold text-white">Intelligent Forecasting</h3>
                <p className="text-slate-400 leading-relaxed">
                  One of the standout features is the predictive modeling engine. By analyzing historical trends, the system
                  projects future cash flow scenarios, allowing users to stress‑test their portfolios against market volatility.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-accent">check_circle</span>
                    <span>Monte Carlo simulations</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-accent">check_circle</span>
                    <span>Real‑time anomaly detection</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-accent">check_circle</span>
                    <span>Exportable PDF reports</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900">
                <img
                  alt="Forecasting Feature"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6p25USDE72QFYvaW6RY8TepDWr53Bk0evOFGlKQWsZzPOm2FV7OteNdlC27Wg6gM1pQ2EHTaQloWHuQP-fEj8zTIuVd5kEoN_2k5uLraZF84IIsvYvpvaxpCoSa19pwBZUYam7MmeDLp9y6uWIFtbTzzcPWMI6wFvpTFNp1dPUUbn55lFMzpBhF1Pll74ApYl5DDA267jeBE6mptGISs_Ji2XoJWQRvl80eIhSYoTLmFIuI1r1iSIMVFVrsFHo6r-oXHgikEuSlD"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Stack */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#61DAFB]">code_blocks</span>
                <span className="text-sm font-medium text-slate-300">React</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#3178C6]">javascript</span>
                <span className="text-sm font-medium text-slate-300">TypeScript</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#06B6D4]">css</span>
                <span className="text-sm font-medium text-slate-300">Tailwind</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-pink-400">show_chart</span>
                <span className="text-sm font-medium text-slate-300">Chart.js</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-white">bolt</span>
                <span className="text-sm font-medium text-slate-300">Socket.io</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center gap-3 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-3xl text-green-500">terminal</span>
                <span className="text-sm font-medium text-slate-300">Node.js</span>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Key Outcomes</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-1">40%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    Increase in Reporting Speed
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-1">&lt; 100ms</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    Real‑time Data Latency
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-1">98/100</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    Lighthouse Performance Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Take */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Sidebar */}
            <div className="md:w-1/3 shrink-0">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                  Behind the Scenes
                </h2>
                <h3 className="text-3xl font-bold text-white mb-6">My Personal Take</h3>
                <div className="h-1 w-20 bg-slate-700 rounded-full"></div>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-2/3 prose prose-invert prose-lg text-slate-400">
              <p>
                Honestly, this project was a beast. The biggest hurdle wasn&apos;t the code itself, but figuring out how to make
                sense of millions of data points without overwhelming the user.
              </p>
              <p>
                I spent a good two weeks just prototyping different navigation patterns. We initially tried a mega‑menu
                structure, but user testing showed it was too clunky. We pivoted to a sidebar with collapsible contexts, which
                felt much more natural for the workflow.
              </p>
              <p>
                My favorite part? Building the WebSocket integration. There&apos;s something incredibly satisfying about watching a
                chart update live as the backend pushes a new transaction. It makes the app feel <em>alive</em>.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-slate-300 my-8">
                “It&apos;s not just about showing data; it&apos;s about telling a story with numbers that people can actually
                understand.”
              </blockquote>
              <p>
                Looking back, I would have loved to implement even more granular permission controls from day one, but we
                shipped an MVP that the client loves, and that&apos;s what counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next case study footer */}
      <footer className="py-20 px-6 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">Next Case Study</p>
          <Link href="/lumina-market" className="group block max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
              Lumina Market
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-400 group-hover:text-white transition-colors">
              <span className="text-lg">View Project</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>
          <div className="mt-20 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© 2024 Alex Davison. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
