import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    line-height: 3;
    li {
      padding: 1rem;
    }

    @media (max-width: 690px) {
      font-size: 1.6rem;
      flex-direction: column;
      width: 100%;
      position: absolute;
      right: 0;
      top: 60px;
      height: 100vh;
      background-color: #3083dc;
      text-align: center;
    }
  }
`;
