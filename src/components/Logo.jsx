import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const logoUrl = "https://skin.comfy.ua/media/x/logo_svg/logo-main-shastina.svg";

export default function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      <img src={logoUrl} alt="Comfy Clone" />
    </Link>
  );
}
