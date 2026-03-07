import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { FiArrowLeft, FiSend } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "الهاتف",
      details: ["+249 968 599 994"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaWhatsapp,
      title: "واتساب",
      details: ["+249 968 599 994"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaFacebookF,
      title: "فيسبوك",
      details: ["Mohand Store"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: FaMapMarkerAlt,
      title: "الموقع",
      details: ["الخرطوم، السودان"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const workingHours = [
    { day: "السبت - الخميس", time: "9:00 ص - 10:00 م" },
    { day: "الجمعة", time: "2:00 م - 10:00 م" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6">
              اتصل بنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              تواصل{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                معنا
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في أي وقت. يمكنك التواصل معنا عبر أي من القنوات
              التالية
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-4`}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+249968599994"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
            >
              <FaPhoneAlt size={20} />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/249968599994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
            >
              <FaWhatsapp size={20} />
              <span>تواصل على واتساب</span>
            </a>
            <a
              href="https://www.facebook.com/YourUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              <FaFacebookF size={20} />
              <span>فيسبوك</span>
            </a>
          </div>
        </div>
      </section>

      {/* Working Hours & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Working Hours */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaClock className="text-blue-500" />
                أوقات العمل
              </h2>
              <div className="space-y-4">
                {workingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.day}
                    </span>
                    <span className="text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FiSend className="text-blue-500" />
                أرسل لنا رسالة
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="الاسم"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="الرسالة"
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/30"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
