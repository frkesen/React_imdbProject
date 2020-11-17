import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledUpcomingWrapper } from "./Upcoming.style";
import { CardList } from "../../components/CardList/CardList";

const movieUpcomingUrl = "https://api.themoviedb.org/3/movie/upcoming";
const apiKey = "Enter API key";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MovieUpcoming() {
  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    axios
      .get(movieUpcomingUrl, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, []);
  

  return (
  <StyledUpcomingWrapper>
     <CardList movieList={movieList} baseImageUrl={baseImageUrl} /> 

  </StyledUpcomingWrapper>
  )
}