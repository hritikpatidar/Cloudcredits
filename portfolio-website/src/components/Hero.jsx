import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">
              Hello, I'm
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Ritik Kumar
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Patidar
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4 text-gray-300">
              React.js Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-xl">
              Passionate React Developer with 2+ years of
              experience building scalable, responsive and
              user-friendly web applications using React,
              Next.js and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                Hire Me
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                <Download size={18} />
                Download CV
              </a>

            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  2+
                </h3>
                <p className="text-gray-400 text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  20+
                </h3>
                <p className="text-gray-400 text-sm">
                  Projects Done
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800"
                alt="Profile"
                className="relative w-64 sm:w-80 lg:w-96 aspect-square object-cover rounded-full border-4 border-blue-500 shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute bottom-4 -left-6 bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl">
                <p className="text-sm text-gray-400">
                  Experience
                </p>
                <h4 className="font-semibold">
                  2+ Years
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;