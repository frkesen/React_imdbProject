import React from 'react'
import { Link } from "react-router-dom";
import { StyledNavbar, StyledLinkLeft, StyledLinkRight } from "./Navbar.style"

export function Navbar() {
    return (
        <StyledNavbar>
            <StyledLinkLeft>
                <Link to="/"> HOME </Link>
            </StyledLinkLeft>
            <StyledLinkRight>
            
                <Link to="/now_playing"> NOW PLAYING </Link>
            
                <Link to="/popular"> POPULAR </Link>
            
                <Link to="/top_rated"> TOP RATED </Link>
            
                <Link to="/upcoming"> UPCOMING </Link>
            </StyledLinkRight>
                
            
        </StyledNavbar>
    )
}
