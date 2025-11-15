import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <div className={styles["banner-container"]}>
      <h3>НА ТОВАРИ КРАЩІ НАСТІЛЬКИ</h3>
      <p>ЩО НАЗВАЛИ ЇХ ЩАСТИНАМИ</p>
      <button className={styles["banner-button"]}></button>
    </div>
  );
}
