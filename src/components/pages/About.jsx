import React from "react";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaHeadset,
  FaShieldAlt,
  FaStore,
  FaAward,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

export default function About() {
  const features = [
    {
      icon: FaShippingFast,
      title: "شحن مجاني",
      desc: "شحن مجاني لجميع الطلبات فوق 500 ج.س",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaExchangeAlt,
      title: "استبدال سهل",
      desc: "استبدال المنتج خلال 14 يوم من الاستلام",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaShieldAlt,
      title: "منتجات أصلية",
      desc: "ضمان جودة جميع المنتجات المعروضة",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaHeadset,
      title: "دعم سريع",
      desc: "خدمة عملاء على مدار الساعة",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    { number: "5+", label: "سنوات الخبرة", icon: FaAward },
    { number: "10K+", label: "عميل سعيد", icon: FaUsers },
    { number: "500+", label: "منتج", icon: FaStore },
    { number: "100+", label: "علامة تجارية", icon: FaHandshake },
  ];

  const values = [
    "جودة عالية في كل منتج",
    "أسعار تنافسية وعادلة",
    "توصيل سريع وآمن",
    "خدمة عملاء مميزة",
    "سياسات إرجاع مرنة",
    "ثقة العملاء是我们的基石",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              من نحن
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              متجر{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                مهند
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              متجرك الأول للأزياء العصرية والأنيقة. نقدم لك تشكيلة متنوعة من
              الملابس والإكسسوارات بأفضل الأسعار.
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

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/logo.jpeg"
                  alt="متجر مهند"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                  <FaStore size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5+</p>
                  <p className="text-sm text-gray-500">سنوات خبرة</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                تأسس متجر{" "}
                <span className="font-semibold text-blue-600">مهند</span> بهدف
                توفير أجود المنتجات العصرية للعملاء في السودان والمنطقة. نحن
                نؤمن بأن الأناقة يجب أن تكون في متناول الجميع.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                على مدار سنوات، успели мы собрать огромную коллекцию одежды и
                аксессуаров для всех возрастов и вкусов. نسعى دائماً لتوفير أحدث
                الموديلات بأفضل الأسعار.
              </p>

              {/* Values List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <FiCheck size={12} className="text-white" />
                    </div>
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <stat.icon size={28} />
                </div>
                <p className="text-4xl font-bold text-white mb-1">
                  {stat.number}
                </p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن نلتزم بتقديم أفضل الخدمات لتجربة تسوق استثنائية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-4`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                هل لديك أي استفسار؟
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                نحن هنا لمساعدتك! تواصل معنا في أي وقت وسنكون سعيدين بالرد على
                استفساراتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  <span>اتصل بنا</span>
                  <FiArrowLeft className="rotate-180" />
                </a>
                <a
                  href="https://wa.me/249968599994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <span>تواصل على واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
