import { NavLink } from "react-router-dom";
import "./nav.css";

export function Nav() {
  return (
    <nav>
      <div className="brand-div">
        <h4 className="brand-logo">AB Dental</h4>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About</NavLink>
        </li>
        <li>
          <NavLink to="/bookappointment">Book Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      </ul>
      <div className="theme-mode">Dark / Light</div>
    </nav>
  );
}
