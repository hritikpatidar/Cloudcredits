import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const projects = [
    {
        title: "E-Commerce Website",
        description:
            "Full-featured e-commerce platform with cart, wishlist, authentication and payment integration.",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        tech: ["React", "Redux", "Tailwind"],
        github: "#",
        live: "#",
    },
    {
        title: "Food Delivery App",
        description:
            "Responsive food ordering application with live order tracking and modern UI.",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        tech: ["React", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
    },
    {
        title: "Admin Dashboard",
        description:
            "Analytics dashboard with charts, reports, user management and API integration.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        tech: ["React", "Chart.js", "REST API"],
        github: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
                        Projects
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Featured Projects
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A collection of projects showcasing my
                        experience in building modern web applications.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                hover:border-blue-500
                transition-all
                duration-500
                hover:-translate-y-2
              "
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                    w-full
                    h-56
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-4 leading-7 text-sm">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.tech.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="
                        px-3
                        py-1
                        text-xs
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        border
                        border-blue-500/20
                      "
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-6">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      border
                      border-slate-700
                      hover:bg-slate-800
                      transition
                    "
                                    >
                                        <BsGithub size={18} />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-500
                      to-purple-600
                      hover:opacity-90
                      transition
                    "
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;