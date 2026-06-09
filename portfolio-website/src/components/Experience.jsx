import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "TechNova Solutions",
        role: "Frontend Developer",
        duration: "2024 - Present",
        description:
            "Developing modern web applications using React.js, Next.js, Tailwind CSS and REST APIs while focusing on performance and user experience.",
    },
    {
        company: "DigitalCraft Technologies",
        role: "React.js Developer",
        duration: "2022 - 2024",
        description:
            "Built responsive dashboards, admin panels and e-commerce applications with Redux Toolkit, API integration and reusable components.",
    },
    {
        company: "CodeSphere Pvt. Ltd.",
        role: "Junior Web Developer",
        duration: "2021 - 2022",
        description:
            "Worked on frontend development, bug fixing, website optimization and implementation of responsive UI designs.",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
                        Experience
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Professional Journey
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        My experience as a React Developer working
                        on modern web applications and client projects.
                    </p>

                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-slate-700 -translate-x-1/2"></div>

                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className={`
                relative
                flex
                items-center
                mb-12
                ${index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                                }
              `}
                        >

                            {/* Dot */}
                            <div
                                className="
                  hidden md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-12
                  h-12
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  items-center
                  justify-center
                  shadow-lg
                "
                            >
                                <Briefcase size={20} />
                            </div>

                            {/* Card */}
                            <div className="w-full md:w-5/12">

                                <div
                                    className="
                    bg-slate-950
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                    hover:border-blue-500
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                                >

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 text-blue-400 mb-4">
                                        <Calendar size={18} />
                                        <span className="text-sm">
                                            {item.duration}
                                        </span>
                                    </div>

                                    {/* Role */}
                                    <h3 className="text-2xl font-bold">
                                        {item.role}
                                    </h3>

                                    {/* Company */}
                                    <p className="text-purple-400 mt-2 font-medium">
                                        {item.company}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 mt-5 leading-7">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mt-16">

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-blue-400">
                            3.5+
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Years Experience
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center">
                        <h3 className="text-4xl font-bold text-purple-400">
                            20+
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Completed Projects
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;