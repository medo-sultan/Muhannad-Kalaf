import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const customerService = [
    { label: "Shipping & Delivery" },
    { label: "Returns & Exchanges" },
    { label: "Order Tracking" },
    { label: "Size Guide" },
    { label: "FAQ" },
    { label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-500">M</span>edo
            </h2>
            <p className="text-sm mb-6 leading-relaxed">
              Your one-stop shop for premium fashion and lifestyle products. We
              deliver quality products with exceptional customer service.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">
                Subscribe to Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
                  <FiSend size={18} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors group"
                  >
                    <FiArrowRight
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      size={14}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {customerService.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors group"
                  >
                    <FiArrowRight
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      size={14}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <p className="text-sm">
                  123 Fashion Street
                  <br />
                  Cairo, Egypt 12345
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                  <FiPhone size={18} />
                </div>
                <a
                  href="tel:+201000000000"
                  className="text-sm hover:text-blue-500 transition-colors"
                >
                  +20 100 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                  <FiMail size={18} />
                </div>
                <a
                  href="mailto:info@medo.com"
                  className="text-sm hover:text-blue-500 transition-colors"
                >
                  info@medo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Medo</span>. All rights
              reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Payment Methods:</span>
              <div className="flex gap-2">
                {["Visa", "MasterCard", "Amex", "PayPal"].map((method) => (
                  <span
                    key={method}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="flex gap-4 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
