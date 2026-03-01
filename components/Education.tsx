import React from "react";

export default function Education() {
  return (
    <section className="py-12 px-6 animate-fadeIn" id="education">
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-12">
        <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Master */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white">
                school
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Master of Computer Science
              </h3>
              <p className="text-slate-400">Stanford University</p>
              <p className="text-xs text-slate-500 mt-1">2016 - 2018</p>
            </div>
          </div>
          {/* Bachelor */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white">
                school
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Bachelor in Software Engineering
              </h3>
              <p className="text-slate-400">MIT</p>
              <p className="text-xs text-slate-500 mt-1">2012 - 2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
