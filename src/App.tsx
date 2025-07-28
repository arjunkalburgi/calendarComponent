import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.css'
import { routes } from "./routes";
import Tabs from "./components/Tabs/Tabs";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter basename="/calendarComponent">
      <Tabs />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App
