import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PublicLayout from "../Layout/PublicLayout/PublicLayout";

const Home = lazy(() => import("../pages/Public/Home/Home"));
const NexusAnalytics = lazy(() => import("../pages/Public/ProjectDetail/NexusAnalytics"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-slate-400">Loading Portfolio...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "projects/nexus-analytics",
        element: (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-slate-400">Loading Case Study...</div>}>
            <NexusAnalytics />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="h-screen flex flex-col items-center justify-center bg-background text-white">
        <h1 className="text-9xl font-black text-slate-800">404</h1>
        <p className="text-xl text-slate-500 mb-8 font-bold uppercase tracking-widest">Page Not Found</p>
        <a href="/" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-all">Go Home</a>
      </div>
    ),
  },
]);

export default routes;
