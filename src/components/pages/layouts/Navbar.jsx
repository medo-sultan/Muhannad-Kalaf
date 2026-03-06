import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiMail, href: "mailto:example@email.com", label: "Email" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#0a0a0a] text-white px-6 py-4 flex justify-between items-center relative z-50">
        {/* Logo */}
        <img src="/1 (16).jpeg" alt="Mohanad Logo" className="h-18 w-18" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-300 ${
                  isActive ? "text-blue-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.slice(0, 4).map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-xl"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#0f0f0f] z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">
            <span className="text-blue-500">M</span>edo
          </h2>
          <button
            onClick={closeSidebar}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/10 text-blue-500 border-l-4 border-blue-500"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Social Icons */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">
            Follow Us
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
