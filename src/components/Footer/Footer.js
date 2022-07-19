import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../../assets/search-blue.svg';
import WatchlistIcon from '../../assets/watchlist-add.svg';

export default function Footer() {
  const date = new Date();
  const today = date.getFullYear();

  return (
    <StyledFooter>
      <FooterContainer>
        <StyledNavLink to="/credits">
          <FooterIconContainer>
            <StyledNavLink to="/credits"> Credits</StyledNavLink> |
            <FooterIconSearchText> &copy; {today} jay milledge</FooterIconSearchText>
          </FooterIconContainer>
        </StyledNavLink>
      </FooterContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 5rem;
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
`;

const FooterIconSearchText = styled.button`
  font-size: 1rem;
  color: #3083dc;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  padding: 0.7rem;

  &:hover {
    color: white;
  }
`;

const FooterIcon = styled.img`
  width: 25px;
`;
