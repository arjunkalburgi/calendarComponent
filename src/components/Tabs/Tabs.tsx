import { NavLink } from "react-router-dom";
import "./Tabs.css";

export default function Tabs() {
  return (
    <div className="tabs">
      <NavLink to="/" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Home
      </NavLink>
      <NavLink to="/desc" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Desc
      </NavLink>
    </div>
  );
}
