import { motion } from "framer-motion";
import { Users, Globe, Briefcase, Award, Target } from "lucide-react";

const stats = [
  { label: "Clients", value: "25+", icon: Users },
  { label: "Projects", value: "comming soon", icon: Briefcase },
  { label: "Team Members", value: "10+", icon: Award },
  { label: "Countries Served", value: "4+", icon: Globe },
  { label: "Years of Experience", value: "3+", icon: Target },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 bg-[#061427] relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Achievements
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our stats reflect the trust, growth, and success we've built so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl 
                         hover:border-blue-500/40 transition text-center"
            >
              <item.icon size={42} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-300 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <h3 className="text-4xl font-extrabold text-white mb-4">
            More Achievements Are Coming Soon
          </h3>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            New milestones, awards, press mentions and startup highlights are on the way.
          </p>

          <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
            <span className="text-blue-300 text-sm tracking-wide">
              🚀 We're growing every day. Stay tuned.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;