import Movie from "./pages/Movie/Movie";
import { MovieDetails } from "./pages/MovieDetail/MovieDetail";
import { MovieNowPlaying } from "./pages/NowPlaying/NowPlaying";
import { MoviePopular } from "./pages/Popular/Popular";
import { MovieTopRated } from "./pages/TopRated/TopRated";
import { MovieUpcoming } from "./pages/Upcoming/Upcoming";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"
import { VideoSection } from "./components/VideoSection/VideoSection";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <VideoSection />
      <Switch>
        <Route path="/details/:id" component={MovieDetails} exact />
        <Route path="/now_playing" component={MovieNowPlaying} exact />
        <Route path="/popular" component={MoviePopular} exact />
        <Route path="/top_rated" component={MovieTopRated} exact />
        <Route path="/upcoming" component={MovieUpcoming} exact />
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
