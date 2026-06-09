import {
    Rocket,
    Smartphone,
    Palette,
} from "lucide-react";

const data = [
    {
        title: "Fast Performance",
        desc: "Lightning-fast loading speed and optimized user experience.",
        icon: <Rocket size={40} />,
    },
    {
        title: "Responsive Design",
        desc: "Looks perfect on mobile, tablet and desktop devices.",
        icon: <Smartphone size={40} />,
    },
    {
        title: "Modern UI",
        desc: "Beautiful layouts with premium and attractive design.",
        icon: <Palette size={40} />,
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">
                        Why Choose Us
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Everything you need to build modern websites.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-lg
              p-8
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-blue-500
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]
              "
                        >
                            {/* Gradient Hover Effect */}
                            <div
                                className="
                absolute inset-0
                bg-gradient-to-br
                from-blue-500/20
                via-purple-500/10
                to-pink-500/20
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
                            />

                            <div className="relative z-10">
                                <div
                                    className="
                  w-16 h-16
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  mb-6
                  group-hover:scale-110
                  transition-all
                  duration-500
                  "
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    {item.desc}
                                </p>

                                <button
                                    className="
                  mt-6
                  text-blue-400
                  font-semibold
                  group-hover:translate-x-2
                  transition-all
                  duration-300
                  "
                                >
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Features;