import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaShippingFast,
  FaExchangeAlt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowRight,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/show", label: "المعرض" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  const customerService = [
    { label: "الشحن والتوصيل", icon: FaShippingFast },
    { label: "الإرجاع والاستبدال", icon: FaExchangeAlt },
    { label: "خدمة العملاء", icon: FaHeadset },
    { label: "حماية المشتري", icon: FaShieldAlt },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FiInstagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/249968599994",
      label: "WhatsApp",
      color: "hover:bg-green-500",
    },
  ];

  const features = [
    { icon: FaShippingFast, title: "شحن مجاني", desc: " للطلبات فوق 500 ج.س" },
    { icon: FaExchangeAlt, title: "استبدال سهل", desc: "خلال 14 يوم" },
    { icon: FaShieldAlt, title: "دفع آمن", desc: "100% آمن" },
    { icon: FaHeadset, title: "دعم 24/7", desc: "خدمة عملاء" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-blue-500 shadow-lg shadow-blue-500/30">
                <img
                  src="/1 (16).jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  <span className="text-blue-500">مه</span>ند
                </span>
                <p className="text-xs text-gray-500">متجر الإلكتروني</p>
              </div>
            </Link>
            <p className="text-sm mb-6 leading-relaxed max-w-md">
              متجرك الأول للأزياء العصرية. نحن نقدم منتجات عالية الجودة مع خدمة
              عملاء استثنائية تجربة تسوق فريدة من نوعها.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-blue-400">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">الخرطوم، السودان</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-blue-400">
                  <FiPhone size={18} />
                </div>
                <a
                  href="tel:+249968599994"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +249 968 599 994
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-blue-400">
                  <FiMail size={18} />
                </div>
                <a
                  href="mailto:info@medo.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@medo.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-3">النشرة البريدية</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-xl hover:from-blue-600 hover:to-blue-700 transition-all">
                  <FiSend size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors group"
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
            <h3 className="text-white font-bold text-lg mb-5">خدمة العملاء</h3>
            <ul className="space-y-3">
              {customerService.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors group"
                  >
                    <item.icon className="text-blue-500 text-xs" size={14} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">تابعنا</h3>
            <p className="text-sm mb-4">
              تواصل معنا على وسائل التواصل الاجتماعي
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} text-white transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* App Download */}
            <div className="mt-6">
              <h4 className="text-white font-medium text-sm mb-3">
                حمل التطبيق
              </h4>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-xs">App Store</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.186.185-.437.247-.656.165-.22-.082-.365-.292-.365-.527V2.176c0-.235.145-.445.365-.527.219-.082.47-.02.656.165zM14.95 13.158l5.607 5.607c.411.411.437 1.127.058 1.628l-4.488 5.953c-.39.516-1.133.665-1.666.334l-3.872-2.403-3.872 2.403c-.531.331-1.274.182-1.666-.334l-4.488-5.953c-.379-.501-.353-1.217.058-1.628l9.427-9.427c.411-.411 1.127-.437 1.628-.058l2.304 2.304c.227.227.227.627 0 .854l-2.304 2.304c-.411.411-.437 1.127-.058 1.628z" />
                  </svg>
                  <span className="text-xs">Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear}{" "}
              <span className="text-white font-semibold">حلمي</span>. جميع
              الحقوق محفوظة.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">طرق الدفع:</span>
              <div className="flex gap-2">
                {["Visa", "MasterCard", "Amex", "PayPal"].map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-400 font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
