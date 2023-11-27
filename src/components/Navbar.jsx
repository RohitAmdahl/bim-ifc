import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { navItems } from "../helpers/navigation.js";

const Navbar = () => {
  return (
    <>
      <div className=" pt-2 ">
        <Link to="/">
          <img src={logo} alt="logo" className="max-w-logo p-2" />
        </Link>
      </div>
      <div>
        <nav className="flex justify-between items-baseline gap-7 text-sm font-sans font-semibold">
          {navItems.map((items) => {
            return (
              <div className="flex " key={items.id}>
                <NavLink className="px-2 text-lg text-text" to={items.link}>
                  {items.name}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
