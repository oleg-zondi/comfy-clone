import React, { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";
import Slider from "react-slick";

export default function HeroBanner() {
  const [bannerProducts, setBannerProducts] = useState([]);

  useEffect(() => {
    const fetchBannerProducts = async () => {
      try {
        // --- 1. ЗМІНА ТУТ: Завантажуємо 10 товарів з 'electronics' ---
        const response = await fetch(
          `https://fakestoreapi.com/products/category/electronics?limit=10`
        );
        // (API насправді поверне лише 6, бо в цій категорії їх 6,
        // але якби їх було більше, ми б отримали 10)

        const data = await response.json();
        setBannerProducts(data);
      } catch (error) {
        console.error("Помилка завантаження банерів:", error);
      }
    };

    fetchBannerProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className={styles["hero-slider"]}>
      {bannerProducts.map((product) => (
        <div key={product.id} className={styles["slide"]}>
          <div
            className={styles["slide-content"]}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundColor: "#f5f5f5",
            }}
          >
            <h2>Супер Акція!</h2>
            <p>Найкращі ціни цього тижня</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
