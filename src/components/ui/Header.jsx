import { useRef, useState } from "react";
import {
  FaHamburger,
  FaHome,
  FaUtensils,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import HeroSection from "../HeroSection";
import FoodOrder from "../FoodOrder";
import Contact from "../Contact";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Section references for smooth scrolling
  const heroRef = useRef(null);
  const foodRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (section, ref) => {
    setActiveSection(section);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaHamburger />
            <span>Foodie</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("hero", heroRef)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                activeSection === "hero"
                  ? "bg-white text-red-500"
                  : "hover:bg-white hover:text-red-500"
              }`}
            >
              <FaHome />
              Hero
            </button>
            <button
              onClick={() => scrollToSection("food", foodRef)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                activeSection === "food"
                  ? "bg-white text-red-500"
                  : "hover:bg-white hover:text-red-500"
              }`}
            >
              <FaUtensils />
              Food
            </button>
            <button
              onClick={() => scrollToSection("contact", contactRef)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                activeSection === "contact"
                  ? "bg-white text-red-500"
                  : "hover:bg-white hover:text-red-500"
              }`}
            >
              <FaPhone />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-red-600 w-64 p-6 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col space-y-6 mt-12">
          <button
            onClick={() => scrollToSection("hero", heroRef)}
            className="flex items-center gap-2 text-lg"
          >
            <FaHome /> Hero
          </button>
          <button
            onClick={() => scrollToSection("food", foodRef)}
            className="flex items-center gap-2 text-lg"
          >
            <FaUtensils /> Food
          </button>
          <button
            onClick={() => scrollToSection("contact", contactRef)}
            className="flex items-center gap-2 text-lg"
          >
            <FaPhone /> Contact
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="container mx-auto mt-16 space-y-20 p-4">
        <section ref={heroRef}>
          <HeroSection />
        </section>
        <section ref={foodRef}>
          <FoodOrder />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Header;
