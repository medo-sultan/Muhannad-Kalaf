import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiHeart,
  FiChevronDown,
} from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks = [
    { to: "/", label: "الرئيسية" },
    // {
    //   to: "/show",
    //   label: "المعرض",
    //   dropdown: ["ملابس رجالية", "ملابس نسائية", "إكسسوارات"],
    // },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  const socialLinks = [
    {
      icon: "facebook",
      href: "https://www.facebook.com/YourUsername",
      color: "hover:bg-blue-600",
    },
    {
      icon: "whatsapp",
      href: "https://wa.me/249968599994",
      color: "hover:bg-green-500",
    },
  ];

  const renderSocialIcon = (icon) => {
    switch (icon) {
      case "facebook":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
          </svg>
        );
      case "whatsapp":
        return <RiWhatsappLine size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl py-2"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div
                className={`relative w-12 h-12 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isScrolled ? "shadow-lg ring-2 ring-blue-500/30" : "shadow-xl"
                }`}
              >
                <img
                  src="/1 (16).jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div
                className={`flex flex-col transition-all duration-300 ${isScrolled ? "opacity-100" : "opacity-100"}`}
              >
                <span
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  <span className="text-blue-500">مه</span>ند
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest ${isScrolled ? "text-gray-500" : "text-gray-400"}`}
                >
                  متجر الإلكتروني
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                          : isScrolled
                            ? "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            : "text-gray-200 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                    {link.dropdown && (
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Search */}
              <button
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/10 text-gray-300 hover:text-white"
                }`}
                aria-label="Search"
              >
                <FiSearch size={20} />
              </button>

              {/* Wishlist */}

              {/* Cart */}
              {/* <button
                className={`p-3 rounded-xl transition-all duration-300 relative ${
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/10 text-gray-300 hover:text-white"
                }`}
                aria-label="Cart"
              >
                <FiShoppingBag size={20} />
                <span className="absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full text-[10px] flex items-center justify-center text-white font-bold">
                  5
                </span>
              </button> */}

              {/* User */}
              {/* <button
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-600"
                    : "hover:bg-white/10 text-gray-300 hover:text-white"
                }`}
                aria-label="Account"
              >
                <FiUser size={20} />
              </button> */}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/249968599994"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 ml-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
              >
                <RiWhatsappLine size={18} />
                <span>تواصل</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-500 ease-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-900 to-slate-800">
          <NavLink
            to="/"
            className="flex items-center gap-3"
            onClick={closeSidebar}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-blue-500">
              <img
                src="/1 (16).jpeg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                <span className="text-blue-500">مه</span>ند
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                متجر الإلكتروني
              </span>
            </div>
          </NavLink>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3">
            <FiSearch size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="بحث عن منتج..."
              className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-280px)]">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.dropdown && <FiChevronDown className="w-5 h-5" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {/* <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
              <FiUser size={20} />
              <span className="text-[10px]">حسابي</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all relative">
              <FiHeart size={20} />
              <span className="text-[10px]">المفضلة</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center">
                3
              </span>
            </button> */}
            {/* <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all relative">
              <FiShoppingBag size={20} />
              <span className="text-[10px]">السلة</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center">
                5
              </span>
            </button> */}
            <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
              <FiSearch size={20} />
              <span className="text-[10px]">بحث</span>
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/249968599994"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium shadow-lg shadow-green-500/30"
          >
            <RiWhatsappLine size={22} />
            <span>تواصل معنا على واتساب</span>
          </a>
        </div>
      </aside>
    </>
  );
}
