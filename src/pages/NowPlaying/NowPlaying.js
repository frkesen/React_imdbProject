import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NowPlaying.css";
import { CardList } from "../../components/CardList/CardList";

const movieNowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
const apiKey = "Enter API key";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export function MovieNowPlaying() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(movieNowPlayingUrl, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, []);
  

  return (
    <div className="Latest">
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </div>
  );
}
