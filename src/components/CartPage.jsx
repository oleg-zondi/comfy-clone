import styles from "./CartPage.module.css";
import { useContext } from "react";
import CartContext from "../CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, totalSum, clearCart } =
    useContext(CartContext);

  return (
    <div className={styles["cart-container"]}>
      <h2>Мій Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className={styles["cart-item"]}>
              <img
                src={item.image}
                alt={item.name}
                className={styles["cart-item-image"]}
              />
              <span>{item.name}</span> <span>{item.price} грн</span>
              <button onClick={() => removeFromCart(index)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}

      <button className={styles["cleaner-butonn"]} onClick={clearCart}>
        Очистити список
      </button>

      <h3 className={styles["total-sum"]}>
        Загальна сума: {totalSum.toFixed(2)} грн
      </h3>
    </div>
  );
}
