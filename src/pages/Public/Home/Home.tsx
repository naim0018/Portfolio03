import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./Components/Hero"));
const Projects = lazy(() => import("./Components/Projects"));
const Experience = lazy(() => import("./Components/Experience"));
const Education = lazy(() => import("./Components/Education"));
const Contact = lazy(() => import("./Components/Contact"));

const Home = () => {
  return (
    <div className="relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400">Loading Section...</div>}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Education />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
