import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-5xl mx-auto px-6">

                <div
                    className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-800
            bg-slate-950
            p-8
            md:p-16
            text-center
          "
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

                    <div className="relative z-10">

                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            Contact Me
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                            Let's Build Something
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Amazing Together
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-8">
                            I'm available for freelance projects,
                            full-time opportunities and exciting collaborations.
                            If you have an idea or project in mind,
                            let's connect and make it happen.
                        </p>

                        {/* Button */}
                        <div className="mt-10">
                            <a
                                href="mailto:yourmail@gmail.com"
                                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
                            >
                                <Mail size={20} />
                                Get In Touch
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* Quick Info */}
                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-gray-400 text-sm">

                            <span>📍 India</span>

                            <span>⚡ Available for Work</span>

                            <span>🚀 React Developer</span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;