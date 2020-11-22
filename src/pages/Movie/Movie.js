import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledMovieWrapper } from "./Movie.style";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { CardList } from "../../components/CardList/CardList";
import { PaginationBar } from "../../components/Pagination/Pagination";

const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";



function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("day");
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: page,
          query: searchKeyword,
        },
      })
      .then((res) => {
        setMovieList(res?.data?.results);
        setCountPage(res.data.total_pages);
      })

      .catch()
      .finally();
  }, [searchKeyword, page]);

  return (
    
      <StyledMovieWrapper>
        <SearchBox
          setSearchKeyword={setSearchKeyword}
          placeholder="Enter a movie name..."
        />
        <PaginationBar countPage={countPage} page={page} handleChange={handleChange} />
        <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
      </StyledMovieWrapper>
    
  );
}

export default Movie;
