import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "Features",
    "About",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            RitikDev
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-gray-300
                  hover:text-white
                  relative
                  transition
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-blue-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-5 text-center pt-4">

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl text-white font-semibold mt-4">
              Get Started
            </button>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;