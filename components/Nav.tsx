"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const [activeHash, setActiveHash] = useState("#about");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#about");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const handleNavClick = (hash: string) => {
    if (pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      window.location.hash = hash;
    }
  };

  const linkClass = (hash: string) =>
    `hover:text-white transition-colors ${
      activeHash === hash
        ? "text-white border-b border-white"
        : "text-slate-400"
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2">
        <span className="font-serif font-bold text-xl tracking-tighter text-white">
          AD.
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <button
          onClick={() => handleNavClick("#about")}
          className={linkClass("#about")}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("#projects")}
          className={linkClass("#projects")}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavClick("#experience")}
          className={linkClass("#experience")}
        >
          Experience
        </button>
        <button
          onClick={() => handleNavClick("#contact")}
          className={linkClass("#contact")}
        >
          Contact
        </button>
      </div>

      <button
        onClick={() => handleNavClick("#contact")}
        className="px-5 py-2 rounded-full bg-slate-100 text-background font-semibold text-sm hover:bg-white hover:scale-105 transition-all"
      >
        Let&apos;s Talk
      </button>
    </nav>
  );
}
