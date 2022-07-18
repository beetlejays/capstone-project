import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>Home</li>
        <li>Popular</li>
        <li>Search</li>
        <li>Watchlist</li>
        <li>Contact</li>
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
