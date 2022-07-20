import styled, {keyframes} from 'styled-components';

import CreditsImage from '../assets/credits-image.jpg';
import TMDBLogo from '../assets/tmdb-logo.svg';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Credits() {
  return (
    <>
      <Header />
      <CreditsIMG src={CreditsImage} alt="" />

      <MainContainer>
        <CreditsHeadline>Credits</CreditsHeadline>

        <MovieDBLogo src={TMDBLogo} alt="The Movie Database Logo" />

        <CreditsCopy>
          This application was built with the awesome and free support from TMDB API. For more information check out the
          official API and documentation.
        </CreditsCopy>
        <CreditsLink href="https://developers.themoviedb.org/3/getting-started/introduction">
          The Movie Database API
        </CreditsLink>
      </MainContainer>

      <Footer />
    </>
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

const CreditsIMG = styled.img`
  animation: ${animateOpacity} 4s;
  width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

const MovieDBLogo = styled.img`
  animation: ${animateOpacity} 2s;
  width: 200px;
  padding: 3rem 0 1rem 0;
`;

const CreditsLink = styled.a`
  font-size: 1.2rem;
  display: inline-block;
  margin-top: 2rem;
  color: white;
  transition: 0.3s;
  border-radius: 10px;
  padding: 0.5rem 1.2rem;
  background: #3083dc;
  &:hover {
    background: orange;
  }
`;

const CreditsCopy = styled.p`
  color: white;
  padding-top: 1rem;
  line-height: 1.7;
  font-size: 1.2rem;
`;

const CreditsHeadline = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #3083dc;
  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
`;

const MainContainer = styled.main`
  max-width: 800px;
  padding: 5rem 20px 15rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
