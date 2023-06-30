import CurrentYear from "@/utils/currentYear";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Greg Dev @<CurrentYear />. All rights reserved.
    </footer>
  );
};

export default Footer;
