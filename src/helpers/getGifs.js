import { useEffect } from "react";

export const getGifs = async (category) => {
  //const API_key = "5iGEUNzXGWbxC0c6ONJB1ACB7f49kgCU";
  const API_key = "qzC1qzyvdecxBv8qyc3xndlahg5r1FRZ";
  const limit = 3;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_key}&q=${category}&limit=${limit}`;

  const response = await fetch(url);
  const { data } = await response.json();

  console.log(data);

  //Esta sintaxis es mas usada
  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
