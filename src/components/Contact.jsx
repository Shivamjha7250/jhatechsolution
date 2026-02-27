import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useState } from "react";
import API_URL from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully!");

        // reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error — could not send message.");
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#061427] relative overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have a project idea? Let’s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT SIDE – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Mail size={28} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Email</h4>
                <p className="text-gray-300 text-sm">jhatechsolution@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Phone size={28} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Phone</h4>
                <p className="text-gray-300 text-sm">+91 coming soon</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Instagram size={28} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Instagram</h4>
                <a
                  target="_blank"
                  href="https://instagram.com/jhatechsolution"
                  className="text-gray-300 text-sm hover:text-blue-300 transition"
                  rel="noreferrer"
                >
                  @jhatechsolution
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <MapPin size={28} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Location</h4>
                <p className="text-gray-300 text-sm">Remote, India</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10
              focus:border-blue-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10
              focus:border-blue-400 focus:outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10
              focus:border-blue-400 focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10
              focus:border-blue-400 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition active:scale-95"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;