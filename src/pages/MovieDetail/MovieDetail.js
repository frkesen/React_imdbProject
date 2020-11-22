import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  StyledDetailWrapper,
  StyledH1,
  StyledImage,
  StyledOverview,
  StyledContentWrapper,
  StyledInfoWrapper
} from "./MovieDetail.style";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, [id]);
  
  return (
    <StyledDetailWrapper>
      <StyledH1>{movieDetails?.title}</StyledH1>
      <StyledContentWrapper>
        <StyledImage src={baseImageUrl + movieDetails?.poster_path} alt={"#"} />
        <StyledInfoWrapper>
          <h2>Overview</h2>
          <StyledOverview>{movieDetails?.overview}</StyledOverview>
          <h3>{"Rate : " + movieDetails?.vote_average } </h3>
          <h3>{"Total Vote : " + movieDetails?.vote_count } </h3>
        </StyledInfoWrapper>
      </StyledContentWrapper>
    </StyledDetailWrapper>
  );
}
