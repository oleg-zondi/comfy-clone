import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import Slider from "react-slick";

export default function ProductList({ title, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Помилка під час завантаження:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-list-container">
      <h2>{title}</h2>

      {products.length === 0 ? (
        <p>Завантаження товарів...</p>
      ) : (
        <Slider {...settings} className="list-wrapper">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
