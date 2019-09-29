import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  li {
    list-style: none;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
`;

const Navbar = () => (
  <StyledNav>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reviews/new">Create a Review</Link>
        </li>
        <li>
          <Link to="/reviews">My Reviews</Link>
        </li>
      </ul>
    </nav>
  </StyledNav>
);

export default Navbar;