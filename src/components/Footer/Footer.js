import {Link} from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../../assets/search-blue.svg';
import WatchlistIcon from '../../assets/watchlist-add.svg';

export default function Footer() {
  return (
    <StyledFooter className="footer">
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

const FooterIconSearchText = styled.p`
  font-size: 1.2rem;
  color: #3083dc;
  transition: 0.4s;
  &:hover {
    color: #ccc;
  }
`;

const FooterIcon = styled.img`
  width: 25px;
`;
