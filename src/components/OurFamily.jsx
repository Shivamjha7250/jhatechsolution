import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const team = [
  {
    name: "Shivam Kumar Jha",
    role: "Founder & CEO",
    img: "/shivam.jpg",
    bio: "I am Shivam Kumar Jha. I am founder of JhaTech Solution.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Rohit Verma",
    role: "Senior Full-Stack Developer",
    img: "/member1.png",
    bio: "Expert in MERN stack with 5+ years of experience.",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Anjali Sharma",
    role: "UI/UX Designer",
    img: "/member2.png",
    bio: "Designs modern and user-centered interfaces.",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Aman Raj",
    role: "Mobile App Developer",
    img: "/member3.png",
    bio: "React Native specialist delivering smooth apps.",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
];

const OurFamily = () => {
  return (
    <section id="ourfamily" className="py-28 bg-[#061427] relative overflow-hidden">
      
      
      <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our <span className="text-blue-500">Family</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Meet the brilliant minds who power JhaTech Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(30,144,255,0.2)] transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border border-white/20 shadow-md"
              />

              <h3 className="text-xl font-bold text-white mt-4">
                {member.name}
              </h3>

              <p className="text-blue-300 text-sm mt-1">{member.role}</p>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4 mt-5">
                <a href={member.linkedin} target="_blank" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href={member.instagram} target="_blank" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href={member.facebook} target="_blank" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                  <Facebook size={20} className="text-white" />
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default OurFamily;