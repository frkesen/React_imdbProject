import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledPopularWrapper } from "./Popular.style";
import { CardList } from "../../components/CardList/CardList";

const moviePopularUrl = "https://api.themoviedb.org/3/movie/popular";
const apiKey = "Enter API key";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MoviePopular() {
  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    axios
      .get(moviePopularUrl, {
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
  <StyledPopularWrapper>
     <CardList movieList={movieList} baseImageUrl={baseImageUrl} /> 

  </StyledPopularWrapper>
  )
}