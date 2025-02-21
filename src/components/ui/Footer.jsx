import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaPhone /> Foodie
          </h2>
          <p className="text-sm">Delicious food at your doorstep</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">Menu</a>
          <a href="#" className="hover:text-gray-300 transition">About Us</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Foodie. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
