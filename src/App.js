import Movie from "./pages/Movie/Movie";
import { MovieDetails } from "./pages/MovieDetail/MovieDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/details/:id" component={MovieDetails} exact />
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
