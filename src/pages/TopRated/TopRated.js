import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledTopRatedWrapper } from "./TopRated.style";
import { CardList } from "../../components/CardList/CardList";

const movieTopRatedUrl = "https://api.themoviedb.org/3/movie/top_rated";
const apiKey = "Enter API key";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MovieTopRated() {
  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    axios
      .get(movieTopRatedUrl, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, []);
  console.log(movieList);

  return (
  <StyledTopRatedWrapper>
     <CardList movieList={movieList} baseImageUrl={baseImageUrl} /> 

  </StyledTopRatedWrapper>
  )
}