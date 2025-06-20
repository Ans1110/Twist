import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Cocktail from "@/pages/Cocktail";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Error from "@/pages/Error";
import RootLayout from "@/layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        ErrorBoundary: Error,
        children: [
          {
            path: "details/:name",
            Component: Cocktail,
            ErrorBoundary: Error,
          },
        ],
      },
      {
        path: "search",
        Component: Search,
        ErrorBoundary: Error,
        children: [
          {
            path: "details/:name",
            Component: Cocktail,
            ErrorBoundary: Error,
          },
        ],
      },
      {
        path: "about",
        Component: About,
        ErrorBoundary: Error,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
    ErrorBoundary: Error,
  },
]);
