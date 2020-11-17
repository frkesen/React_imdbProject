import { Card } from "../Card/Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movieList, baseImageUrl }) => {
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          imgSrc={baseImageUrl + movie.poster_path}
          id={movie.id}
        />
      ))}
    </StyledCardList>
  );
};
