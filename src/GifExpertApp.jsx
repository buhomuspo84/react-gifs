import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Flowers" /*, "DGZ"*/]);

  const onAddCategory = (newCategory) => {
    const found = categories.find((element) => element === newCategory);
    if (found) console.log("Duplicado");
    else setCategories([...categories, newCategory]);
  };

  console.log(categories);

  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
