"use client";
export const GetCocktails = async (search: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.drinks;

  if (newData) {
    const newCocktails = newData.map((item: any) => {
      const { idDrink, strDrink, strCategory, strDrinkThumb } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        category: strCategory,
      };
    });
    return newCocktails;
  } else {
    throw new Error("Error fetching cocktails");
  }
};
