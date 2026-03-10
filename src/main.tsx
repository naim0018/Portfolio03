import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RouterProvider router={routes} />
      <Toaster richColors position="bottom-right" />
    </ThemeProvider>
  </Provider>,
);
