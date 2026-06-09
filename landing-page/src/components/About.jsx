import { CheckCircle, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className=" py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <div className="relative">

            <div className="absolute -top-5 -left-5 w-full h-full bg-blue-500 rounded-3xl opacity-20 blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="About"
              className="relative rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600">
                2+
              </h3>
              <p className="text-sm">
                Years Experience
              </p>
            </div>

          </div>

          {/* Right Side Content */}
          <div>

            <span className="text-blue-400 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Building Modern Digital
              Experiences For Businesses
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              We create high-performance websites and web
              applications using React, Next.js and Tailwind CSS.
              Our goal is to deliver fast, scalable and beautiful
              digital solutions that help businesses grow online.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <span>Responsive & Mobile Friendly Design</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <span>SEO Optimized Development</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <span>Clean & Maintainable Code</span>
              </div>

            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <Users size={35} className="text-blue-400 mb-3" />
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-400">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <Award size={35} className="text-yellow-400 mb-3" />
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-400">
                  Projects Completed
                </p>
              </div>

            </div>

            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;