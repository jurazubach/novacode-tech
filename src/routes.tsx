import type { RouteRecord } from "vite-react-ssg";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Expertise } from "./pages/Expertise";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "expertise", element: <Expertise /> },
      { path: "work", element: <Work /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
];
