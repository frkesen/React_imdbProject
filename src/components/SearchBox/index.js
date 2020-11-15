import { useRef } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledSearchButton,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyword, placeholder }) => {
  // const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(inputRef?.current?.value);
    }
  };

  return (
    <StyledSearchBox>
      <StyledSearchInput
        ref={inputRef} // onChange kullanmadan veriyi alma
        isColored={false}
        // onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <StyledSearchButton
        onClick={() => setSearchKeyword(inputRef?.current?.value)}
      >
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
