import { motion } from "framer-motion";
import { CheckCircle, Users, Rocket, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-28 bg-[#061427] relative overflow-hidden">

    
      <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Fast, scalable & secure digital products for modern businesses.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-20"
        >
          We are a modern software company helping startups, enterprises and global teams
          build digital products that are fast, scalable and long-term reliable.
          Our focus is simple: clean engineering, modern UI/UX and technology that actually performs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur mb-24 text-center max-w-4xl mx-auto"
        >
          <Users className="text-blue-400 mx-auto mb-4" size={40} />
          <h3 className="text-3xl text-white font-bold mb-4">Who We Are</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            A passionate team of developers, designers & engineers delivering  
            Web Apps • Mobile Apps • Dashboards • Automation • APIs  
            with clarity, transparency and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur hover:border-blue-400/40 transition"
          >
            <ShieldCheck className="text-blue-400 mb-4" size={40} />
            <h4 className="text-xl text-white font-bold mb-3">Quality Over Everything</h4>
            <p className="text-gray-300">
              Every product is engineered with precision, performance and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur hover:border-blue-400/40 transition"
          >
            <Users className="text-blue-400 mb-4" size={40} />
            <h4 className="text-xl text-white font-bold mb-3">Client-First Approach</h4>
            <p className="text-gray-300">
              Clear communication, zero complexity — we build what grows your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur hover:border-blue-400/40 transition"
          >
            <Rocket className="text-blue-400 mb-4" size={40} />
            <h4 className="text-xl text-white font-bold mb-3">Innovation & Modern Tech</h4>
            <p className="text-gray-300">
              We use scalable architectures & advanced tools to build future-ready systems.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl md:text-4xl text-white font-bold mb-6">
            How We Work
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Understand → Plan → Build → Improve  
            A simple workflow for reliable technology without over-complication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl md:text-4xl text-white font-bold mb-8">
            Why Brands Trust Us
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Professional development standards",
              "Fast delivery with clean code",
              "Long-term support & maintenance",
              "Transparent communication",
              "Startup-friendly pricing",
            ].map((item, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
              >
                ✔ {item}
              </span>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
            Want to Build Something?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Turn your ideas into real, user-friendly digital products that scale.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;