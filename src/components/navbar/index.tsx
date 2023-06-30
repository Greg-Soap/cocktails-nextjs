"use client";
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/Theme";
import SearchBar from "../searchBar";

const Navbar = () => {
  const links = [{ href: "/", name: "home" }];
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.brand}>Cocktails Wiki</h2>
      <div className={styles.links}>
        <SearchBar />
        {links.map((link, index) => (
          <Link className={styles.link} key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
        <button className={styles.themeIcon} onClick={toggle}>
          {theme === "light" ? "🔆" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
