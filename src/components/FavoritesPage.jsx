import styles from "./FavoritesPage.module.css";
import { useContext } from "react";
import FavoritesContext from "../FavoritesContext";

export default function FavoritesPage() {
  const { favoriteItems, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className={styles["favorites-container"]}>
      <h2>Мої Вподобання</h2>

      {favoriteItems.length === 0 ? (
        <p>Ваш список обраного порожній.</p>
      ) : (
        <div className={styles["favorites-list"]}>
          {favoriteItems.map((item, index) => (
            <div key={index} className={styles["favorite-item"]}>
              <img
                src={item.image}
                alt={item.name}
                className={styles["favorite-item-image"]}
              />
              <span className={styles["favorite-item-name"]}>{item.name}</span>
              <span className={styles["favorite-item-price"]}>
                {item.price} грн
              </span>
              <button
                className={styles["remove-button"]}
                onClick={() => removeFromFavorites(index)}
              >
                Видалити
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
