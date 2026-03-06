import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/Show.css";

const ITEMS = [
  {
    id: 1,
    to: "/",
    img: "https://images.pexels.com/photos/36237486/pexels-photo-36237486/free-photo-of-serene-marina-with-mountain-backdrop-at-daytime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hoverImg: "/1 (11).jpeg",
  },
  {
    id: 2,
    to: "/",
    img: "/1 (12).jpeg",
    hoverImg: "/1 (13).jpeg",
  },
  {
    id: 3,
    to: "/",
    img: "/1 (14).jpeg",
    hoverImg: "/1 (18).jpeg",
  },
  {
    id: 4,
    to: "/",
    img: "/1 (19).jpeg",
    hoverImg: "/1 (17).jpeg",
  },
];

// Modal Component
function ImageModal({ isOpen, onClose, images, selectedIndex, productName }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  if (!isOpen) return null;

  const allImages = images.map((item) => item.img);

  const openWhatsApp = () => {
    const currentImage = allImages[currentIndex];
    const productInfo = productName || "المنتج";
    const message = `مرحباً، أرغب في طلب:\n\n*المنتج:* ${productInfo}\n*الصورة:* ${currentImage}\n\nشكراً`;
    const phoneNumber = "249968599994";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="fx-modal-overlay" onClick={onClose}>
      <div className="fx-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="fx-modal-close" onClick={onClose} aria-label="إغلاق">
          ✕
        </button>

        {/* Main Image with Swiper */}
        <div className="fx-modal-main">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            initialSlide={selectedIndex}
            className="fx-modal-swiper"
          >
            {allImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`صورة ${index + 1}`}
                  className="fx-modal-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails */}
        <div className="fx-modal-thumbnails">
          {allImages.map((img, index) => (
            <button
              key={index}
              className={`fx-thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                const swiper =
                  document.querySelector(".fx-modal-swiper")?.swiper;
                if (swiper) {
                  swiper.slideToLoop(index);
                  setCurrentIndex(index);
                }
              }}
            >
              <img src={img} alt={`صورة مصغرة ${index + 1}`} />
            </button>
          ))}
        </div>

        {/* WhatsApp Button */}
        <button className="fx-whatsapp-btn" onClick={openWhatsApp}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          تواصل عبر واتساب
        </button>
      </div>
    </div>
  );
}

export default function Show() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // return (
  //   <section className="fx-catalog" dir="rtl">
  //     {/* Main Swiper Slider */}
  //     <div className="fx-main-slider">
  //       <Swiper
  //         modules={[Navigation, Pagination]}
  //         navigation
  //         pagination={{ clickable: true }}
  //         loop={true}
  //         autoplay={{ delay: 3000 }}
  //         className="fx-hero-swiper"
  //       >
  //         {ITEMS.map((item) => (
  //           <SwiperSlide key={item.id}>
  //             <div className="fx-slide-content" onClick={() => openModal(0)}>
  //               <img src={item.img} alt="" className="fx-slide-image" />
  //               <div className="fx-slide-overlay">
  //                 <span>اضغط للمزيد</span>
  //               </div>
  //             </div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>

  //     {/* Grid of Images */}
  //     <div className="fx-grid">
  //       {ITEMS.map((it, index) => (
  //         <article className="fx-card" key={it.id}>
  //           <Link
  //             to={it.to}
  //             className="fx-media"
  //             aria-label={`فتح المنتج رقم ${it.id}`}
  //             onClick={(e) => {
  //               e.preventDefault();
  //               openModal(index);
  //             }}
  //           >
  //             <img
  //               src={it.img}
  //               alt=""
  //               className="fx-img fx-img--main"
  //               loading="lazy"
  //             />
  //             <img
  //               src={it.hoverImg}
  //               alt=""
  //               className="fx-img fx-img--hover"
  //               loading="lazy"
  //             />
  //           </Link>
  //         </article>
  //       ))}
  //     </div>

  //     {/* Modal */}
  //     <ImageModal
  //       isOpen={isModalOpen}
  //       onClose={closeModal}
  //       images={ITEMS}
  //       selectedIndex={selectedImageIndex}
  //       productName="منتجات متنوعة"
  //     />
  //   </section>
  // );
}
