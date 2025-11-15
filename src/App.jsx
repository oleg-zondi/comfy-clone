import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Компоненти
import Header from "./components/Header";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import CartPage from "./components/CartPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import FavoritesPage from "./components/FavoritesPage.jsx";

import CartContext from "./CartContext";
import FavoritesContext from "./FavoritesContext";

import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  const [cards, setCards] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const totalSum = cards.reduce((total, card) => total + Number(card.price), 0);

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem("cart", JSON.stringify(cards));
    }
  }, [cards, currentUser]);

  const handleAddToCart = async (card) => {
    const newCart = [...cards, card];
    setCards(newCart);

    if (currentUser) {
      try {
        const cartDocRef = doc(db, "userCarts", currentUser.uid);

        await setDoc(cartDocRef, { cartItems: newCart });
        console.log("Кошик збережено в Firestore!");
      } catch (error) {
        console.error("Помилка збереження кошика в Firestore:", error);
      }
    }
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCards((prevCart) =>
      prevCart.filter((item, index) => index !== indexToRemove)
    );
  };
  const handleClearCart = () => {
    setCards([]);
  };

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, currentUser]);

  const handleAddToFavorites = async (card) => {
    if (!favorites.find((fav) => fav.name === card.name)) {
      const newFavorites = [...favorites, card];
      setFavorites(newFavorites);

      if (currentUser) {
        try {
          const favDocRef = doc(db, "userFavorites", currentUser.uid);

          await setDoc(favDocRef, { favoriteItems: newFavorites });
          console.log("Обране збережено в Firestore!");
        } catch (error) {
          console.error("Помилка збереження обраного в Firestore:", error);
        }
      }
    }
  };

  const handleRemoveFromFavorites = (indexToRemove) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item, index) => index !== indexToRemove)
    );
  };

  const [searchTerm, setSearchTerm] = useState("");

  const cartContextValue = {
    cartItems: cards,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    clearCart: handleClearCart,
    totalSum: totalSum,
    cartCount: cards.length,
  };
  const favoritesContextValue = {
    favoriteItems: favorites,
    addToFavorites: handleAddToFavorites,
    removeFromFavorites: handleRemoveFromFavorites,
    favoritesCount: favorites.length,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <FavoritesContext.Provider value={favoritesContextValue}>
        <div>
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            isLoggedIn={!!currentUser}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainContent />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
