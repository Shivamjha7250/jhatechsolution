import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-12 overflow-hidden bg-[#071832]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[18%] right-[-15%] w-[480px] h-[480px] bg-blue-600/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[300px] h-[300px] bg-blue-400/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white/90 text-2xl md:text-4xl font-light mb-2 md:mb-3 tracking-tight">
            Build With Experts
          </h3>

          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tight">
            <span className="text-white">Jha</span>
            <span className="text-blue-600">Tech</span>{" "}
            <span className="text-blue-400">Solution</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
            Simplifying Web, App & Software Development with fast, scalable and secure solutions.
          </p>

          {/* Highlight Tag */}
          <div className="inline-block px-5 py-2.5 border border-blue-500/40 bg-blue-500/10 rounded-lg backdrop-blur-sm mb-10">
            <span className="text-blue-300 text-sm tracking-wide">
              Web • App • Software Development • Bug Fixing
            </span>
          </div>

          {/* CTA BUTTONS (Clickable) */}
          <div className="flex flex-wrap gap-5">

            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 md:px-10 py-3 md:py-4 rounded-xl 
                         text-white font-semibold shadow-lg shadow-blue-600/25 transition-all active:scale-95"
            >
              Get a Quote
            </a>

            <a
              href="#contact"
              className="border border-white/25 hover:bg-white/5 px-8 md:px-10 py-3 md:py-4 
                         rounded-xl text-white font-semibold transition-all active:scale-95"
            >
              Contact Us
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[250px] md:w-[320px] h-[250px] md:h-[320px] bg-blue-500/20 blur-[110px] rounded-full -z-10" />

          <img
            src="/ceo.png"
            alt="CEO Shivam Kumar Jha"
            loading="lazy"
            className="relative z-10 w-full max-w-[420px] md:max-w-[520px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;