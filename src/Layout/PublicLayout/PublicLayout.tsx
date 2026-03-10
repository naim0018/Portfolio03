import { Outlet } from "react-router-dom";
import Nav from "../../pages/Public/Home/Components/Nav";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background selection:text-slate-900">
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with passion.</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
