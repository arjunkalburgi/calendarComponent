import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy-load pages for better scaling
const Home = lazy(() => import("./Home"));
const Moon = lazy(() => import("./Moon"));

export const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/moon", element: <Moon /> },
];
