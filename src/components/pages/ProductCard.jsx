import { useState } from "react";
import { FiShoppingCart, FiHeart, FiStar, FiEye } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/Show.css";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const phoneNumber = "249968599994";

  const openWhatsApp = (currentImage) => {
    const productDetails = `
🛍️ *طلب جديد*

━━━━━━━━━━━━━━

📦 *المنتج:* ${product.name}

💰 *السعر:* $${product.price}

━━━━━━━━━━━━━━

🖼️ *صورة المنتج*
${currentImage}

━━━━━━━━━━━━━━
`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(productDetails)}`,
      "_blank",
    );
  };

  const productImages = [{ img: product.image }];

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />

          {product.discount > 0 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}

          {/* Hover buttons */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white">
              <FiShoppingCart size={18} />
            </button>

            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white">
              <FiHeart size={18} />
            </button>

            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <FiEye size={18} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <p className="text-xs text-blue-500 font-medium uppercase tracking-wider mb-1">
            {product.category}
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-500 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* WhatsApp Order */}
          <button
            onClick={() => openWhatsApp(product.image)}
            className="w-full text-center py-3 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fx-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="fx-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fx-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <div className="fx-modal-header">
              <h3>{product.name}</h3>
              <p className="fx-modal-price">${product.price.toFixed(2)}</p>
            </div>

            <div className="fx-modal-main">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                initialSlide={selectedIndex}
                className="fx-modal-swiper"
              >
                {productImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.img}
                      alt={product.name}
                      className="fx-modal-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* WhatsApp Button in Modal */}
            <button
              className="fx-whatsapp-btn"
              onClick={() => openWhatsApp(product.image)}
            >
              اطلب عبر واتساب
            </button>
          </div>
        </div>
      )}
    </>
  );
}
