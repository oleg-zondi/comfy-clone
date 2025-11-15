import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Я шукаю..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className={styles["search-button"]}>
        <FaSearch />
        Знайти
      </button>
    </div>
  );
}
