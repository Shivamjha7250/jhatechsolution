import { motion } from "framer-motion";
import { Code, Smartphone, Database, Wrench, Brush, Cpu } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites, MERN apps, admin panels & business dashboards.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "React Native apps for Android & iOS with modern UI/UX and smooth performance.",
    icon: Smartphone,
  },
  {
    title: "API Development",
    desc: "Secure, scalable REST APIs, integrations, authentication & backend systems.",
    icon: Database,
  },
  {
    title: "Bug Fixing & Optimization",
    desc: "Fixing errors, improving performance, code optimization & stability upgrades.",
    icon: Wrench,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern, user-focused interface design for web & mobile products.",
    icon: Brush,
  },
  {
    title: "Automation & Custom Software",
    desc: "Task automation, workflow tools & custom software tailored for your business.",
    icon: Cpu,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#06172d] relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Powerful, scalable & high-quality development services built for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl 
              hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(30,144,255,0.2)]
              transition group cursor-pointer"
            >
              <service.icon
                size={42}
                className="text-blue-400 mb-6 group-hover:scale-110 transition"
              />
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Why Choose <span className="text-white">Jha </span>
            <span className="text-blue-500">Tech Solution</span>?
          </h2>

          <ul className="text-gray-300 text-lg space-y-4 mt-6">
            <li className="flex items-center justify-center gap-3">
              <span className="text-blue-400 text-2xl">⚡</span>
              Fast delivery with premium quality
            </li>

            <li className="flex items-center justify-center gap-3">
              <span className="text-blue-400 text-2xl">🛡</span>
              Secure, scalable & modern solutions
            </li>

            <li className="flex items-center justify-center gap-3">
              <span className="text-blue-400 text-2xl">👨‍💻</span>
              Experienced developers (MERN, React Native, APIs)
            </li>

            <li className="flex items-center justify-center gap-3">
              <span className="text-blue-400 text-2xl">🌍</span>
              Global clients | 24×7 support
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;