import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

type cocktailsT = {
  name: string;
  image: string;
  instructions: string;
  info: string;
  category: string;
  glass: string;
  measures: string[];
  ingredients: string[];
};
const CocktailDetails = async ({ params }: any) => {
  let cocktail = await getCocktail(params.id);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={cocktail?.image!}
          alt={cocktail?.name!}
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.details}>
          <h2 className={styles.name}>{cocktail?.name}</h2>
          <p className={styles.category}>{cocktail?.category}</p>
          <p className={styles.alcohol}>{cocktail?.info}</p>
          <p className={styles.glass}>Recommended: {cocktail?.glass}</p>
          <div className={styles.list}>
            <ol>
              {cocktail?.ingredients.map(
                (recipe, index) => recipe && <li key={index}>{recipe}</li>
              )}
            </ol>
            <ol>
              {cocktail?.measures.map(
                (recipe, index) => recipe && <li key={index}>{recipe}</li>
              )}
            </ol>
          </div>
          <p className={styles.instructions}>{cocktail?.instructions}</p>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetails;
async function getCocktail(id: any) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();

  if (data.drinks) {
    const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
    } = data.drinks[0];
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];
    const measures = [
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
    ];
    const newCocktail: cocktailsT = {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients,
      measures,
    };
    return newCocktail;
  }
}
