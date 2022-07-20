import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  const date = new Date();
  const today = date.getFullYear();

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterIconContainer>
          <StyledNavLink to="/credits"> Credits</StyledNavLink> |
          <FooterIconSearchText>
            <a href="https://jay-media.de"> &copy; {today} jay milledge</a>
          </FooterIconSearchText>
        </FooterIconContainer>
      </FooterContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 4rem;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 100%;
  z-index: 2;
`;

const FooterContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.3rem;
`;

const StyledNavLink = styled(NavLink)`
  transition: 0.2s;
  color: #3083dc;
  padding: 0.8rem;
  &.active {
    color: orange;
  }
  &.hover {
    color: orange;
  }
`;

const FooterIconSearchText = styled.button`
  font-size: 1rem;
  color: #3083dc;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  padding: 0.7rem;

  a {
    transition: 0.2s;
    color: #3083dc;
  }

  a:hover {
    color: orange;
  }
`;
