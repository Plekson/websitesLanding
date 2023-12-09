import React from "react";
import Menu from "./Menu/Menu";
import { NavbarAnimations } from "./NavbarAnimations";
import "./Navbar.css";

const links = [
  { link: "#", text: "Home" },
  { link: "#", text: "About" },
  { link: "#", text: "Pricing" },
  { link: "#", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar w-screen h-16 fixed top-0 duration-200 z-10 bg-white">
      <NavbarAnimations />
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <h3 className="font-bold tracking-wider">SiteHaven</h3>
        </div>
        <Menu links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
