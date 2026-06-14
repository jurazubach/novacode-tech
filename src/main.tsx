import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./styles/index.css";

// vite-react-ssg prerenders each route to static HTML at build time and
// hydrates on the client. `basename` matches the GitHub project-page subpath.
export const createRoot = ViteReactSSG({ routes, basename: import.meta.env.BASE_URL });
