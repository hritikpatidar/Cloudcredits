import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-widest font-medium">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Know More About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              React.js Developer 🚀
            </h3>

            <p className="text-gray-400 leading-8">
              Hi, I'm <span className="text-white font-semibold">
                Ritik Kumar Patidar
              </span>,
              a passionate React.js Developer with
              3+ years of experience building modern,
              scalable and responsive web applications.

              I have worked on multiple projects including
              E-Commerce, Logistics, Dashboard Systems,
              Portfolio Websites and Admin Panels.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-400" />
                <div>
                  <h4 className="font-semibold">
                    Education
                  </h4>
                  <p className="text-gray-400 text-sm">
                    MCA Graduate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-purple-400" />
                <div>
                  <h4 className="font-semibold">
                    Experience
                  </h4>
                  <p className="text-gray-400 text-sm">
                    3+ Years
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" />
                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Neemuch, MP
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center hover:border-blue-500 transition">
              <h3 className="text-4xl font-bold text-blue-400">
                3+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center hover:border-purple-500 transition">
              <h3 className="text-4xl font-bold text-purple-400">
                20+
              </h3>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center hover:border-green-500 transition">
              <h3 className="text-4xl font-bold text-green-400">
                10+
              </h3>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center hover:border-pink-500 transition">
              <h3 className="text-4xl font-bold text-pink-400">
                100%
              </h3>

              <p className="text-gray-400 mt-2">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;