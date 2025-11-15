import styles from "./ProductCard.module.css";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../CartContext";
import FavoritesContext from "../FavoritesContext";

export default function ProductCard({ product }) {
  const { title: name, image, price } = product;

  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);

  const handleBuyClick = () => {
    addToCart({ name, image, price });
  };

  const handleFavoriteClick = () => {
    addToFavorites({ name, image, price });
  };

  return (
    <div className={styles["product-card"]}>
      <img src={image} alt={name} className={styles["product-image"]} />
      <h3 className={styles["product-name"]}>{name}</h3>
      <p className={styles["product-price"]}>{price} грн</p>

      <div className={styles["button-container"]}>
        <button
          className={styles["favorite-button"]}
          onClick={handleFavoriteClick}
        >
          <FaHeart />
        </button>

        <button className={styles["buy-button"]} onClick={handleBuyClick}>
          Купити
        </button>
      </div>
    </div>
  );
}
