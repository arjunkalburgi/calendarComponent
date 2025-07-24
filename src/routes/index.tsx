import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy-load pages for better scaling
const Home = lazy(() => import("./Home"));
const Desc = lazy(() => import("./Desc"));

export const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/desc", element: <Desc /> },
];
