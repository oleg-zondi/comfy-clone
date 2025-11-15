import React, { useState } from "react";
import styles from "./CatalogMenu.module.css";
import { FaApple, FaMobileAlt, FaLaptop, FaBolt } from "react-icons/fa";

const mainCategoriesData = [
  {
    id: "apple",
    name: "Новинки Apple",
    icon: <FaApple />,

    subCategoryColumns: [
      {
        title: "iPhone",
        links: ["iPhone 15 Pro", "iPhone 15", "iPhone 14"],
      },
      {
        title: "MacBook",
        links: ['MacBook Pro 14"', "MacBook Air M2", "MacBook Air M1"],
      },
    ],

    banner: {
      image: "https://i.imgur.com/example.jpg",
      title: "Супер знижки на Apple!",
    },
  },
  {
    id: "energy",
    name: "Енергозабезпечення",
    icon: <FaBolt />,
    subCategoryColumns: [
      {
        title: "Зарядні станції",
        links: ["EcoFlow", "Anker", "Bluetti"],
      },
      {
        title: "Генератори",
        links: ["Бензинові", "Дизельні", "Інверторні"],
      },
      {
        title: "Джерела живлення",
        links: ["ДБЖ", "Акумулятори", "Сонячні панелі"],
      },
    ],
    banner: null,
  },
  {
    id: "phones",
    name: "Смартфони та телефони",
    icon: <FaMobileAlt />,
    subCategoryColumns: [
      {
        title: "Android",
        links: ["Samsung", "Google Pixel", "Xiaomi"],
      },
      {
        title: "Аксесуари",
        links: ["Чохли", "Зарядні пристрої", "Навушники"],
      },
    ],
    banner: null,
  },
];

export default function CatalogMenu() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const activeCategory = mainCategoriesData.find(
    (cat) => cat.id === activeCategoryId
  );

  const handleMouseLeave = () => {
    setActiveCategoryId(null);
  };

  return (
    <div
      className={styles["catalog-menu-container"]}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles["catalog-menu-wrapper"]}>
        <div className={styles["main-categories-column"]}>
          <ul className={styles["category-list"]}>
            {mainCategoriesData.map((category) => (
              <li
                key={category.id}
                className={styles["category-list-item"]}
                onMouseEnter={() => setActiveCategoryId(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["sub-content-column"]}>
          {activeCategory ? (
            <div className={styles["sub-content-grid"]}>
              <div className={styles["sub-category-links-grid"]}>
                {activeCategory.subCategoryColumns.map((column, index) => (
                  <div key={index} className={styles["sub-category-column"]}>
                    <h4>{column.title}</h4>
                    <ul className={styles["sub-category-list"]}>
                      {column.links.map((link, idx) => (
                        <li key={idx} className={styles["sub-category-item"]}>
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {activeCategory.banner && (
                <div className={styles["category-banner"]}>
                  <p>{activeCategory.banner.title}</p>
                </div>
              )}
            </div>
          ) : (
            <p>Наведіть на категорію, щоб побачити більше.</p>
          )}
        </div>
      </div>
    </div>
  );
}
