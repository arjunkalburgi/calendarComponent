import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

// Lazy-load pages for better scaling
const Home = lazy(() => import("./Home"));
const Moon = lazy(() => import("./Moon"));

export const routes: RouteObject[] = [
    { path: "/default", element: <Home /> },
    { path: "/moon", element: <Moon /> },
    { path: "/", element: <Navigate to="/default" replace /> }, // 👈 redirect
];
