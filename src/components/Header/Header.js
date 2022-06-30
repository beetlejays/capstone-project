import styled from 'styled-components';

import logo from '../../movme-logo.svg';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={logo} alt="mov.me logo" />
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
  z-index: 1;
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 10px;
`;

const Logo = styled.img`
  height: 25px;
`;
