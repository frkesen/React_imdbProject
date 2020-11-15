import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.2rem;
`;

export const StyledSearchButton = styled(StyledButton)`
  cursor: pointer;
  height: 2rem;
`;

export const StyledSearchInput = styled.input`
  color: black;
  ${(p) =>
    p.isColored &&
    css`
      color: red;
    `}
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  height: 2rem;
  width: 15rem;
`;

export const StyledSearchBox = styled.div`
    padding: 2rem;
    background-color: purple;
    width: 100%;
    
/*     ${StyledSearchInput} {
        color: gray;
    } */
`;
