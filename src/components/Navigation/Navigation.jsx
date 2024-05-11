import { NavLink } from "react-router-dom";
import RoutesComponent from "../Routes/RoutesComponent";

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      {/* <RoutesComponent /> */}
    </div>
  );
}
