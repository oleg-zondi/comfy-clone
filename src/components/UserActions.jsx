import styles from "./UserActions.module.css";
import { Link } from "react-router-dom";

import { FaHeart, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function UserActions({
  caunt,
  isLoggedIn,
  handleLogout,
  favCount,
}) {
  return (
    <div className={styles.container}>
      <Link to="/favorites" className={styles["action-item"]}>
        <FaHeart /> Обране
        {favCount > 0 && <span>{favCount}</span>}
      </Link>

      <Link to="/cart" className={styles["action-item"]}>
        <FaShoppingCart />
        Кошик
        {caunt > 0 && <span>{caunt}</span>}
      </Link>

      {isLoggedIn ? (
        <>
          <div className={styles["action-item"]}>
            <FaUser /> Профіль
          </div>

          <div className={styles["action-item"]} onClick={handleLogout}>
            <FaSignOutAlt /> Вийти
          </div>
        </>
      ) : (
        <Link to="/login" className={styles["action-item"]}>
          <FaUser /> Увійти
        </Link>
      )}
    </div>
  );
}
