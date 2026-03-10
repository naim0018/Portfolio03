import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const [activeHash, setActiveHash] = useState("#about");
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

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
      navigate(`/${hash}`);
    } else {
      window.location.hash = hash;
    }
  };

  const linkClass = (hash: string) =>
    `hover:text-white transition-colors cursor-pointer border-none bg-transparent active:scale-95 transition-all outline-none ${
      activeHash === hash
        ? "text-white border-b border-white"
        : "text-slate-400"
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl glass rounded-full px-12 py-4 flex items-center justify-between shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2">
        <span className="font-serif font-bold text-2xl tracking-tighter text-white">
          AD.
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
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
        className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-900 font-bold text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg"
      >
        Let's Talk
      </button>
    </nav>
  );
}
