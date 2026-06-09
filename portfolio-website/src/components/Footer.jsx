import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-6 pb-8">

      <div className="max-w-7xl mx-auto">

        {/* Main Footer Card */}
        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-[32px]
            p-8
            md:p-12
          "
        >

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            <div className="text-center lg:text-left">

              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-400
                  text-sm
                "
              >
                Available For Work
              </span>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  mt-5
                  bg-gradient-to-r
                  from-blue-400
                  via-purple-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                "
              >
                Let's Build Something Amazing
              </h2>

              <p className="text-gray-400 mt-4 max-w-xl">
                Passionate React.js Developer focused on
                creating modern, scalable and high-performance
                web applications.
              </p>

            </div>

            <a
              href="mailto:yourmail@gmail.com"
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-500
                to-purple-600
                text-white
                font-medium
                hover:scale-105
                transition
              "
            >
              Hire Me 🚀
            </a>

          </div>

          {/* Divider */}
          <div className="h-px bg-slate-800 my-10"></div>

          {/* Bottom */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left */}
            <div className="text-center lg:text-left">

              <h3 className="text-xl font-semibold text-white">
                Ritik Kumar Patidar
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                React.js Developer
              </p>

            </div>

            {/* Center */}
            <div className="flex flex-wrap justify-center gap-3">

              {[
                "Home",
                "About",
                "Skills",
                "Services",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    bg-slate-950
                    border
                    border-slate-800
                    text-gray-400
                    hover:text-blue-400
                    hover:border-blue-500
                    transition
                  "
                >
                  {item}
                </a>
              ))}

            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

              <a
                // href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                // href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                // href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  hover:border-pink-500
                  hover:-translate-y-1
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#home"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-500
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition
                "
              >
                <FaArrowUp />
              </a>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-8">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ritik Kumar Patidar.
            Crafted with ❤️ using React & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;