import { ArrowRight, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6">
              <Star size={16} className="text-yellow-400" />
              Trusted by 100+ Clients
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Build Modern
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
              Create stunning websites and web applications
              with React, Next.js and Tailwind CSS.
              Fast, responsive and beautifully designed.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
                Get Started
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center gap-2 border border-white/20 px-8 py-4 rounded-xl text-white hover:bg-white/10 transition">
                <Play size={18} />
                Watch Demo
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  100+
                </h3>
                <p className="text-gray-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  50+
                </h3>
                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  2+
                </h3>
                <p className="text-gray-400">
                  Years Exp.
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Hero"
              className="rounded-3xl shadow-2xl border border-white/10"
            />

            {/* Floating Card 1 */}
            <div className="absolute -top-5 -left-5 bg-white p-4 rounded-2xl shadow-xl">
              <h4 className="font-bold text-blue-600">
                100+
              </h4>
              <p className="text-sm text-gray-500">
                Projects Done
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl">
              <h4 className="font-bold text-green-600">
                98%
              </h4>
              <p className="text-sm text-gray-500">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;