import {Link} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../movme-logo.svg';
import BackButton from '../BackButton/BackButton';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';

export default function Header({displayBackButton}) {
  return (
    <StyledHeader>
      <HeaderContainer>
        {/* {displayBackButton && <BackButton />} */}
        <BackButton />
        <Link to="/">
          <Logo src={logo} alt="mov.me" />
        </Link>
        <Navigation />
        <MobileNavigation />
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 60px;
  background-color: rgb(0, 0, 0);
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  position: relative;

  @media (max-width: 770px) {
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 25px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;
