import { Card } from "../Card/Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movieList, baseImageUrl }) => {
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          imgSrc={movie.poster_path ? baseImageUrl + movie.poster_path
                : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"}
          id={movie.id}
        />
      ))}
    </StyledCardList>
  );
};
