import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledPopularWrapper } from "./Popular.style";
import { CardList } from "../../components/CardList/CardList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { PaginationBar } from "../../components/Pagination/Pagination";

const moviePopularUrl = "https://api.themoviedb.org/3/movie/popular";
const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MoviePopular() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get(moviePopularUrl, {
        params: {
          api_key: apiKey,
          page: page,
          query: searchKeyword,
        },
      })
      .then((res) => {
        setMovieList(res?.data?.results);
        setCountPage(res?.data?.total_pages);
      })
      .catch()
      .finally();
  }, [searchKeyword, page]);
  

  return (
  <StyledPopularWrapper>
    <SearchBox
          setSearchKeyword={setSearchKeyword}
          placeholder="Enter a movie name..."
        />
    <PaginationBar countPage={countPage} page={page} handleChange={handleChange} />
    <CardList movieList={movieList} baseImageUrl={baseImageUrl} /> 
  </StyledPopularWrapper>
  )
}