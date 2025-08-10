import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { Pointer } from "../components/pointer.jsx";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link cursor-none">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link cursor-none">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#projects" className="nav-link cursor-none">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link cursor-none">
          Contact
        </a>
      </li>
    </ul>
  );
}
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-1g bg-primary/70">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href=""
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-none"
          >
            Ajnas
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block overflow-hidden text-center sm:hidden"
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
      <Pointer>
        <div className="text-2xl">👆</div>
      </Pointer>
    </div>
  );
};
export default Navbar;
