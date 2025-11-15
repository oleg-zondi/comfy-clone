import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("РЕЄСТРАЦІЯ УСПІШНА!");
      navigate("/");
    } catch (firebaseError) {
      console.error("ПОМИЛКА РЕЄСТРАЦІЇ:", firebaseError.message);
      setError(firebaseError.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("ВХІД УСПІШНИЙ!");
      navigate("/");
    } catch (firebaseError) {
      console.error("ПОМИЛКА ВХОДУ:", firebaseError.message);
      if (
        firebaseError.code === "auth/user-not-found" ||
        firebaseError.code === "auth/wrong-password"
      ) {
        setError("Неправильний email або пароль.");
      } else {
        setError(firebaseError.message);
      }
    }
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Вхід</h2>

        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error && <p className={styles["error-message"]}>{error}</p>}

        <button type="submit" className={styles["submit-button"]}>
          Увійти
        </button>

        <button
          type="button"
          className={styles["register-button"]}
          onClick={handleRegistration}
        >
          Зареєструватися
        </button>
      </form>{" "}
    </div>
  );
}
