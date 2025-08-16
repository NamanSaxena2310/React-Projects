import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.3)]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            FakeStore<span className="text-secondary">.io</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Your one-stop shop for fake products 😉
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col space-y-2 text-gray-400">
            <NavLink to="/home" className="hover:text-white">
              Home
            </NavLink>
            <NavLink to="/products" className="hover:text-white">
              Products
            </NavLink>
            <NavLink to="/cart" className="hover:text-white">
              Cart
            </NavLink>
            <NavLink to="/logout" className="hover:text-white">
              Logout
            </NavLink>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Get the latest updates about our fake products.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-l-lg bg-neutral-800 border border-neutral-700 focus:outline-none "
            />
            <button className="bg-secondary px-4 py-2 rounded-r-lg hover:bg-secondary/80 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FakeStore.io — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
