import styled from "styled-components";



export const StyledNavbar = styled.div`
    padding: 1rem;
    background-color: coral;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
        
`;

export const StyledLinkLeft = styled.div`
    
    a {
    color: white;
    text-decoration: none;
    align-items: center;
    border-radius: 0.3rem ;
    padding: 0.5rem;
    background-color: red;
    &:hover {
    text-decoration: underline;
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(128, 0, 128, 0.7);
  }
  }
    
    
        
`;

export const StyledLinkRight = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    gap: 0.5rem;
     
    a {
    color: white;
    text-decoration: none;
    align-items: center;
    border-radius: 0.3rem ;
    padding: 0.5rem;
    background-color: red;
    &:hover {
    text-decoration: underline;
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(128, 0, 128, 0.7);
  }
  }    
        
`;

