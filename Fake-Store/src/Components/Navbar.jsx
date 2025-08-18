import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="text-primary flex justify-between bg-neutral-900 p-6 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.3)] ">
      <div className="text-xl ">FakeStore<span className="text-secondary">.io</span></div>

      <button className=" md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen === false ? <GiHamburgerMenu size={25} /> : <IoMdClose size={28} />}
      </button>

      <ul className={` z-10000 flex flex-col justify-center items-center text-xl gap-5 absolute top-19 left-0 w-full bg-neutral-900  h-screen  ${menuOpen ? "block" : "hidden"} md:visible md:h-fit md:flex md:flex-row md:static md:w-fit md:bg-transparent`}>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/cart'}>Cart</NavLink>
        <NavLink to={'/logout'}>Logout</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
