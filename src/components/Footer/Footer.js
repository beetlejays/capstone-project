import {Link} from 'react-router-dom';
import styled from 'styled-components';

import searchIcon from '../../assets/search-blue.svg';

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <FooterContainer>
        <Link to="/search">
          <FooterIconContainer>
            <FooterIcon src={searchIcon} alt="" />
            <FooterIconSearchText>Search</FooterIconSearchText>
          </FooterIconContainer>
        </Link>
        <Link to="/watchlist">
          <FooterIconContainer>
            <FooterIcon src={searchIcon} alt="" />
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
  height: 7rem;
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
  font-size: 1.5rem;
  color: #3083dc;
  transition: 0.4s;
  &:hover {
    color: #ccc;
  }
`;

const FooterIcon = styled.img`
  width: 40px;
`;
