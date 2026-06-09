import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
} from "react-icons/si";

const skills = [
    {
        name: "React JS",
        icon: <FaReact size={40} />,
        color: "text-cyan-400",
    },
    {
        name: "Next JS",
        icon: <SiNextdotjs size={40} />,
        color: "text-white",
    },
    {
        name: "Redux Toolkit",
        icon: <SiRedux size={40} />,
        color: "text-purple-400",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} />,
        color: "text-sky-400",
    },
    {
        name: "JavaScript",
        icon: <FaJs size={40} />,
        color: "text-yellow-400",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={40} />,
        color: "text-blue-400",
    },
    {
        name: "Node JS",
        icon: <FaNodeJs size={40} />,
        color: "text-green-400",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={40} />,
        color: "text-green-500",
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 uppercase tracking-widest text-sm">
                        My Skills
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Technologies I Work With
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Technologies and tools I use to build
                        modern web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                text-center
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
                        >
                            <div
                                className={`
                  flex
                  justify-center
                  mb-4
                  ${skill.color}
                  group-hover:scale-110
                  transition
                `}
                            >
                                {skill.icon}
                            </div>

                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>

                            <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>

                        </div>
                    ))}

                </div>

                {/* Extra Tools */}
                <div className="mt-16 text-center">

                    <h3 className="text-2xl font-semibold mb-8">
                        Tools & Platforms
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">

                        {[
                            "Git",
                            "GitHub",
                            "Postman",
                            "VS Code",
                            "Figma",
                            "Firebase",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="
                  px-5
                  py-2
                  rounded-full
                  bg-slate-900
                  border
                  border-slate-800
                  text-gray-300
                  hover:border-blue-500
                  transition
                "
                            >
                                {tool}
                            </span>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;