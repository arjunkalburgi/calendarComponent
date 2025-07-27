import { NavLink } from "react-router-dom";
import "./Tabs.css";

export default function Tabs() {
  return (
    <div className="tabs">
      <NavLink to="/" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Default
      </NavLink>
      <NavLink to="/moon" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Moon
      </NavLink>
    </div>
  );
}
