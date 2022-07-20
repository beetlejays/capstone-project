import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <StyledNavigationLink to="/">Home</StyledNavigationLink>
        <StyledNavigationLink to="/search">Search</StyledNavigationLink>
        <StyledNavigationLink to="/watchlist">Watchlist</StyledNavigationLink>
      </ul>
    </Nav>
  );
}

const StyledNavigationLink = styled(NavLink)`
  color: white;
  padding: 0.8rem 0.8rem;
  font-size: 1.1rem;
  transition: 0.4s;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    color: #3083dc;
  }
  &.active {
    color: #3083dc;
  }
  @media (max-width: 880px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    line-height: 3;
    transition: 0.4s;
    opacity: 1;

    @media (max-width: 880px) {
      font-size: 1.6rem;
      flex-direction: column;
      width: 100%;
      position: absolute;
      right: 0;
      top: 60px;
      height: 100vh;
      background-color: #999999ed;
      text-align: center;
    }
  }
`;
