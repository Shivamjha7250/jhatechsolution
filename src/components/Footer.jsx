import { Mail, Instagram, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import API_URL from "../config";

const Footer = () => {
    const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/subscriber`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        alert(data.message || "Check your email to confirm subscription.");
        setEmail("");
      } else {
        alert(data.message || "Subscription failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };
  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 border-t border-white/10 overflow-hidden">

      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h1 className="text-3xl font-extrabold">
              <span className="text-white">Jha</span>
              <span className="text-blue-400">Tech</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Building Modern Web, App & Software solutions for startups and enterprises.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#achievements" className="hover:text-white transition">Achievements</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#ourfamily" className="hover:text-white transition">Our Family</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:jhatechsolution@gmail.com" className="hover:text-white transition">
                  jhatechsolution@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 00000 00000</span>
              </li>

              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-blue-400" />
                <a href="https://instagram.com/jhatechsolution" target="_blank" className="hover:text-white transition">
                  @jhatechsolution
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Remote,India</span>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get updates about our new projects & services.
            </p>

            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
            type="email"
            required
             value={email}
           onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
           className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 
               text-white text-sm focus:outline-none focus:border-blue-400"
           />
        <button
         type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition"
         >
           Join
         </button>
      </form>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} JhaTech Solution — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;