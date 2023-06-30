"use client";
import Card from "@/components/card";
import styles from "./page.module.css";
import { GetCocktails } from "@/api/getCocktails";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/Search";

export default function Home() {
  const { search } = useContext(SearchContext);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const fetchedCocktails = await GetCocktails(search);
        setCocktails(fetchedCocktails.slice(0, 24));
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      }
    }

    fetchCocktails();
  }, [search]);
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Discover the Art of Mixology: Your Go-To Guide for Crafting Exquisite
        Cocktails - Welcome to the Cocktails Wiki!
      </h1>
      <section className={styles.card_wrapper}>
        {cocktails.map((cocktail: any) => (
          <Card
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.name}
            category={cocktail.category}
            image={cocktail.image}
          />
        ))}
      </section>
    </section>
  );
}
