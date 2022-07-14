import {Link} from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../../assets/search-blue.svg';
import WatchlistIcon from '../../assets/watchlist-add.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Link to="/search">
          <FooterIconContainer>
            <FooterIcon src={SearchIcon} alt="" />
            <FooterIconSearchText>Search</FooterIconSearchText>
          </FooterIconContainer>
        </Link>
        <Link to="/watchlist">
          <FooterIconContainer>
            <FooterIcon src={WatchlistIcon} alt="" />
            <FooterIconSearchText>Watchlist</FooterIconSearchText>
          </FooterIconContainer>
        </Link>
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
`;

const FooterIconSearchText = styled.button`
  font-size: 1.2rem;
  color: #3083dc;
  transition: 0.4s;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ccc;
    padding-bottom: 8px;
  }
`;

const FooterIcon = styled.img`
  width: 25px;
`;
