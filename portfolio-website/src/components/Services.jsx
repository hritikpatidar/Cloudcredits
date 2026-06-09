import {
    Code2,
    MonitorSmartphone,
    Database,
    Rocket,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: <Code2 size={32} />,
        title: "Frontend Development",
        description:
            "Building fast, scalable and modern web applications using React.js, Next.js and Tailwind CSS.",
    },
    {
        icon: <MonitorSmartphone size={32} />,
        title: "Responsive Design",
        description:
            "Creating pixel-perfect responsive interfaces that work seamlessly across all devices.",
    },
    {
        icon: <Database size={32} />,
        title: "API Integration",
        description:
            "Integrating REST APIs, authentication systems and third-party services efficiently.",
    },
    {
        icon: <Rocket size={32} />,
        title: "Performance Optimization",
        description:
            "Improving website speed, SEO and overall user experience using best practices.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="inline-block px-4 py-2 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Services
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        What I Can Do For You
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
                        I help businesses and startups build modern,
                        responsive and high-performance web applications.
                    </p>

                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                overflow-hidden
                bg-slate-950
                border border-slate-800
                rounded-3xl
                p-8
                hover:border-blue-500
                transition-all
                duration-500
                hover:-translate-y-3
              "
                        >
                            {/* Glow Effect */}
                            <div
                                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-500/10
                  via-purple-500/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
                            />

                            {/* Number */}
                            <span className="absolute top-5 right-5 text-5xl font-bold text-white/5">
                                0{index + 1}
                            </span>

                            {/* Icon */}
                            <div
                                className="
                  relative
                  w-14 h-14
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  mb-6
                  group-hover:scale-110
                  transition
                "
                            >
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="relative text-xl font-bold mb-4">
                                {service.title}
                            </h3>

                            <p className="relative text-gray-400 leading-7 text-sm">
                                {service.description}
                            </p>

                            {/* Button */}
                            <button
                                className="
                  relative
                  flex items-center
                  gap-2
                  mt-6
                  text-blue-400
                  text-sm
                  font-medium
                  group-hover:gap-3
                  transition-all
                "
                            >
                                Learn More
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Services;