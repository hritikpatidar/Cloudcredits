import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss your ideas
            and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
              <div className="bg-blue-500 p-4 rounded-xl">
                <Mail />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Email Us
                </h3>
                <p className="text-gray-400">
                  contact@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
              <div className="bg-green-500 p-4 rounded-xl">
                <Phone />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Call Us
                </h3>
                <p className="text-gray-400">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
              <div className="bg-purple-500 p-4 rounded-xl">
                <MapPin />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Location
                </h3>
                <p className="text-gray-400">
                  Indore, Madhya Pradesh
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;