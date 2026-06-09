import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Services", id: "services" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const handleScroll = () => {
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");

                if (
                    scrollY >= sectionTop &&
                    scrollY < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-1 p-2 rounded-full bg-slate-900/70 backdrop-blur-xl border border-slate-700 shadow-xl">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="px-3 text-sm font-bold text-white"
                    >
                        RKP
                    </a>

                    {/* Links */}
                    {links.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`
                px-3 py-1.5
                rounded-full
                text-xs
                font-medium
                transition-all
                duration-300
                ${activeSection === item.id
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "text-gray-300 hover:text-white hover:bg-white/10"
                                }
              `}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Hire Me Button */}
                    <a
                        href="mailto:yourmail@gmail.com"
                        className="
              ml-1
              px-4
              py-1.5
              rounded-full
              text-xs
              font-medium
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              text-white
              hover:scale-105
              transition
            "
                    >
                        Hire Me
                    </a>

                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">

                <div className="h-14 px-4 flex items-center justify-between">

                    <a
                        href="#home"
                        className="text-lg font-bold text-white"
                    >
                        RKP
                    </a>

                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>

                </div>

                {open && (
                    <div className="px-4 pb-4">

                        <div className="flex flex-col gap-2">

                            {links.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setOpen(false);
                                    }}
                                    className={`
                    py-2.5
                    px-3
                    text-sm
                    rounded-lg
                    transition
                    ${activeSection === item.id
                                            ? "bg-blue-500 text-white"
                                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                                        }
                  `}
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="mailto:yourmail@gmail.com"
                                className="
                  mt-2
                  text-center
                  py-2.5
                  rounded-lg
                  text-sm
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  text-white
                  font-medium
                "
                            >
                                Hire Me
                            </a>

                        </div>

                    </div>
                )}

            </div>
        </>
    );
};

export default Navbar;