import Nav from "../../components/Nav";

export default function Projects() {
  return (
    <>
      <Nav />
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Projects
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            This page will showcase the portfolio projects. Coming soon!
          </p>
        </div>
      </section>
    </>
  );
}
