import {NavLink} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

export default function Navigation({mobileNavActive}) {
  return (
    <Nav active={mobileNavActive}>
      <ul>
        <StyledNavigationLink to="/">Home</StyledNavigationLink>
        <StyledNavigationLink to="/search">Search</StyledNavigationLink>
        <StyledNavigationLink to="/watchlist">Watchlist</StyledNavigationLink>
      </ul>
    </Nav>
  );
}

const animateOpacity = keyframes`
0%, 100% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const animateMove = keyframes`
0%, 100% {
    transform: translateY(-30px);
}
100% {
  transform: translateY(0);
}
`;

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
    font-size: 1.5rem;
    padding-top: 2rem;
    text-transform: none;
    &.active {
      color: #3083dc;
    }
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
      display: ${props => (props.active ? 'flex' : 'none')};
      animation: ${animateMove} 0.4s, ${animateOpacity} 0.4s;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 60px;
      height: 50vh;
      width: 30%;
      background-color: #23201b;
      text-align: center;
      color: orange;
      line-height: 2;
    }

    @media (max-width: 610px) {
      width: 40%;
    }
    @media (max-width: 470px) {
      width: 70%;
    }
  }
`;
