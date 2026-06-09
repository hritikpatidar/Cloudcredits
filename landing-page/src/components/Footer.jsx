import { Send } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              RitikDev
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Building modern websites and web applications
              with React, Next.js and Tailwind CSS.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                // href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                // href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                // href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                // href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-blue-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>React Development</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe to get latest updates.
            </p>

            <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent flex-1 px-4 py-3 outline-none"
              />

              <button className="px-4 bg-gradient-to-r from-blue-500 to-purple-600">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Ritik Developer. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;