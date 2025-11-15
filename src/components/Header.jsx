// src/components/Header.jsx

import styles from "./Header.module.css";
import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar.jsx";
import UserActions from "./UserActions.jsx";
import { FaBars } from "react-icons/fa";
import CatalogMenu from "./CatalogMenu.jsx";
import { useState, useContext } from "react";
import CartContext from "../CartContext";
import FavoritesContext from "../FavoritesContext";

export default function Header({
  searchTerm,
  setSearchTerm,
  isLoggedIn,
  handleLogout,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartCount } = useContext(CartContext);
  const { favoritesCount } = useContext(FavoritesContext);

  return (
    <div className={styles["header-wraper"]}>
      <Logo />
      <button
        className={styles["catalog-button"]}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars /> Каталог
      </button>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserActions
        caunt={cartCount}
        favCount={favoritesCount}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      {isMenuOpen && <CatalogMenu />}
    </div>
  );
}
