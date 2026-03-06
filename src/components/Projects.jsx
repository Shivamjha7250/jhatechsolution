import { motion } from "framer-motion";
import {
  Laptop,
  Layers,
  BarChart,
  ShoppingBag,
  Cpu,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "Back2Campus",
    tagline: "A complete student–alumni networking ecosystem",
    description:
      "A real-time MERN-based student–alumni platform with dashboards, OTP login, secure APIs, and advanced MongoDB analytics.",
    features: [
      "OTP Login & Secure Authentication",
      "Admin Dashboard (User Control)",
      "Student–Alumni Communication",
      "Role-Based Access",
      "Real-Time Activity Logs",
      "MongoDB Aggregation Engine",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: Laptop,
    glow: "blue-600/20",
  },
  {
    title: "Vartul Herbal Garden",
    tagline: "Plant research & herbal data management system",
    description:
      "A MERN-based herbal plant documentation platform built for researchers and plant scientists. Fully structured, admin-driven system.",
    features: [
      "Admin Dashboard",
      "Plant Category Management",
      "Plant Research Database",
      "OTP-Based Access",
      "CRUD System",
      "Cloud-Based Storage",
    ],
    tech: ["React", "MongoDB", "Node.js", "Express"],
    icon: Layers,
    glow: "green-500/20",
  },
  {
    title: "SmartBiz ERP",
    tagline: "Enterprise resource planning system for SMEs",
    description:
      "A business automation ERP platform including billing, inventory, HR, analytics, and secure access architecture.",
    features: [
      "Employee HRMS",
      "Inventory Tracking",
      "GST Billing System",
      "Role-Based Access",
      "Sales Analytics",
      "Secure API Layer",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: BarChart,
    glow: "yellow-500/20",
  },
  {
    title: "ShopMaster E-Commerce",
    tagline: "Scalable MERN ecommerce automation",
    description:
      "E-commerce platform built for small businesses with automated payments, product control, order tracking, and customer dashboards.",
    features: [
      "Admin Product Control",
      "Order Tracking",
      "Cart System",
      "Payment Gateway Ready",
      "Offer & Coupon Engine",
      "Detailed Admin Analytics",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    icon: ShoppingBag,
    glow: "pink-500/20",
  },
  {
    title: "AI Document Analyzer",
    tagline: "AI-powered document extraction & automation",
    description:
      "A smart AI tool that reads PDFs and documents, extracts key information, generates summaries, and stores structured datasets.",
    features: [
      "AI OCR Extraction",
      "Text Identification",
      "Smart Summary Generator",
      "PDF → Structured Data",
      "MongoDB Document Store",
      "Secure Role-Based Login",
    ],
    tech: ["React", "Node.js", "Python AI API", "MongoDB"],
    icon: Cpu,
    glow: "cyan-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#061427] relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real startup-level products built using modern MERN engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-xl 
                         hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(0,122,255,0.2)] transition"
            >
              <div className={`absolute top-6 right-6 w-20 h-20 bg-${p.glow} blur-3xl rounded-full`}></div>

              <p.icon className="text-blue-400 mb-6" size={46} />

              <h3 className="text-3xl font-bold text-white">{p.title}</h3>
              <p className="text-blue-300 text-sm mt-1">{p.tagline}</p>

              <p className="text-gray-300 mt-4 leading-relaxed">{p.description}</p>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
                <ul className="space-y-2">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Shield className="text-blue-400" size={16} />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2 text-lg">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            More Projects Are <span className="text-blue-500">Under Processing...</span>
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            We are continuously building next-generation digital products.  
            New project case-studies will be added soon.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;