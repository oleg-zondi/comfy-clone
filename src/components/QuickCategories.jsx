import React from "react";
import styles from "./QuickCategories.module.css";

import {
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaBlender,
  FaGamepad,
} from "react-icons/fa";

const quickCategoriesData = [
  { name: "Смартфони", icon: <FaMobileAlt /> },
  { name: "Ноутбуки", icon: <FaLaptop /> },
  { name: "Телевізори", icon: <FaTv /> },
  { name: "Для кухні", icon: <FaBlender /> },
  { name: "Все для геймінгу", icon: <FaGamepad /> },
];

export default function QuickCategories() {
  return (
    <div className={styles["categories-container"]}>
      {quickCategoriesData.map((category, index) => (
        <div key={index} className={styles["category-item"]}>
          <div className={styles["category-icon"]}>{category.icon}</div>

          <span className={styles["category-name"]}>{category.name}</span>
        </div>
      ))}
    </div>
  );
}
