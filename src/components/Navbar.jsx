import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Achievements", id: "achievements" },
    { name: "Projects", id: "projects" },
    { name: "Our Family", id: "ourfamily" },
    { name: "Contact", id: "contact" },
    { name: "Careers", id: "careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020617]/90 backdrop-blur-xl py-1 border-b border-white/10"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-14 md:h-20 w-auto object-contain"
          />

          <div className="flex flex-col leading-[0.85]">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-white">Jha</span>
              <span className="text-blue-400">Tech</span>
            </h1>
            <span className="text-[9px] md:text-[12px] tracking-[0.35em] text-blue-400/90 font-bold uppercase mt-[2px]">
              Solution
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

      
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[70%] 
        bg-[#020617]/95 backdrop-blur-xl shadow-xl transition-transform duration-300 z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-8 pt-24 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={() => setMenuOpen(false)}
              href={`#${item.id}`}
              className="text-xl font-semibold text-gray-300 hover:text-white transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;