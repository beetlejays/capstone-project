import {Link} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../movme-logo.svg';
import BackButton from '../BackButton/BackButton';
import Navigation from '../Navigation/Navigation';

export default function Header({displayBackButton}) {
  return (
    <StyledHeader>
      <HeaderContainer>
        {displayBackButton && <BackButton />}

        <Link to="/">
          <Logo src={logo} alt="mov.me logo" />
        </Link>
        {/*  <Navigation />  will be added in next story */}
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
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  position: relative;
`;

const Logo = styled.img`
  height: 25px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;
