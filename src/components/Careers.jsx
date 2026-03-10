import { motion } from "framer-motion";
import { Users, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

const roleList = [
  "Web Developer",
  "Mobile App Developer",
  "React Developer",
  "React Native Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Python Developer",
  "Django Developer",
  "Node.js Developer",
  "Cyber Security Analyst",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Designer",
  "QA / Software Tester",
  "Automation Engineer",
  "AI/ML Engineer",
  "Cloud Engineer",
  "Intern – Web Developer",
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    currentWorking: "",
    currentPackage: "",
    college: "",
    passout: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your backend / Google Apps Script handler
    const FORM_ENDPOINT =  "http://localhost:4000/api/career";

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(FORM_ENDPOINT, { method: "POST", body: data });

    alert("Application Submitted Successfully!");
  };

  return (
    <section id="careers" className="py-28 bg-[#061427] relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Careers
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our mission to build modern, scalable & high-performance digital products.
          </p>
        </motion.div>

        {/* WHY WORK WITH US */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
          >
            <Users className="text-blue-400 mb-4" size={42} />
            <h3 className="text-xl font-bold text-white mb-3">Collaborative Culture</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Work with a supportive team that values creativity & innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
          >
            <Rocket className="text-blue-400 mb-4" size={42} />
            <h3 className="text-xl font-bold text-white mb-3">Learn & Grow Fast</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Gain hands-on experience with modern stacks & scalable architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
          >
            <Sparkles className="text-blue-400 mb-4" size={42} />
            <h3 className="text-xl font-bold text-white mb-3">Flexible Workstyle</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Remote freedom, balanced work-life, high-performance culture.
            </p>
          </motion.div>
        </div>

        {/* OPEN POSITIONS — COMING SOON */}
        <div className="text-center mb-24">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Open <span className="text-blue-500">Positions</span>
          </h3>
          <p className="text-gray-300 text-xl font-semibold tracking-wide">
            🚀 Coming Soon...
          </p>
        </div>

        {/* DIDN'T FIND ROLE? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Pre apply a role for you?
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            We always welcome passionate developers, designers & innovators.
          </p>
        </motion.div>

        {/* APPLICATION FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          <input
            name="email"
            required
            placeholder="Your Email"
            type="email"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          <input
            name="whatsapp"
            required
            placeholder="WhatsApp Number"
            type="tel"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          {/* Role Dropdown */}
          <select
            name="role"
            required
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          >
            <option value="">Select Role</option>
            {roleList.map((r, i) => (
              <option key={i} value={r} className="text-black">
                {r}
              </option>
            ))}
          </select>

          <input
            name="currentWorking"
            placeholder="Current Working Status"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          <input
            name="currentPackage"
            placeholder="Current Package (Optional)"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          <input
            name="college"
            placeholder="College / University"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          <input
            name="passout"
            placeholder="Passout Year"
            onChange={handleChange}
            className="py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
          />

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="text-white text-sm">Upload Your Resume (PDF/DOC)</label>
            <input
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="mt-2 py-3 px-4 bg-white/10 rounded-xl text-white border border-white/10"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
          >
            Submit Application
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Careers;