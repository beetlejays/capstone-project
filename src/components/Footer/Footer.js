import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../../assets/search-blue.svg';
import WatchlistIcon from '../../assets/watchlist-add.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledNavLink to="/search">
          <FooterIconContainer>
            <FooterIcon src={SearchIcon} alt="" />
            <FooterIconSearchText>Search</FooterIconSearchText>
          </FooterIconContainer>
        </StyledNavLink>
        <StyledNavLink to="/watchlist">
          <FooterIconContainer>
            <FooterIcon src={WatchlistIcon} alt="" />
            <FooterIconSearchText>Watchlist</FooterIconSearchText>
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
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.3rem;
`;

const StyledNavLink = styled(NavLink)`
  transition: 0.2s;
  &.active {
    color: orange;
  }
`;

const FooterIconSearchText = styled.button`
  font-size: 1.2rem;
  color: #3083dc;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
`;

const FooterIcon = styled.img`
  width: 25px;
`;
