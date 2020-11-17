import styled from "styled-components";

export const StyledDetailWrapper = styled.div`
  
  background-color: rgb(229, 94, 94);
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  
  
`;

export const StyledContentWrapper = styled.div`
  
  
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;
  
  
`;

export const StyledInfoWrapper = styled.div`
   
  display: flex;
  align-items: center;
  flex-direction: column;

  h2, h3 {
    background-color: bisque;
    padding: 0.5rem 2rem;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
  }
  
  
`;

export const StyledH1 = styled.h1`
  /* background-color: red; */
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
  
`;

export const StyledImage = styled.img`
  /* width: 100%;
  height: auto; */
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
   
`;

export const StyledOverview = styled.p`
  background-color: bisque;
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  color: black;
  font-size: 1rem;
  padding: 1rem 1rem;
  margin: 1rem;
  width: 80%
  
`;