"use client";
import Card from "@/components/card";
import styles from "./page.module.css";
import { GetCocktails } from "@/api/getCocktails";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/Search";
import Loading from "./loading";

export default function Home() {
  const { search } = useContext(SearchContext);
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const fetchedCocktails = await GetCocktails(search);
        setCocktails(fetchedCocktails.slice(0, 24));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error("Error fetching cocktails:", error);
        return <h2>Error fetching cocktails</h2>;
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
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </section>
  );
}
