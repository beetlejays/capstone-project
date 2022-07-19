import styled from 'styled-components';

import TMDBLogo from '../assets/tmdb-logo.svg';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Credits() {
  return (
    <>
      <Header />

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

const MovieDBLogo = styled.img`
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
  margin: 5rem auto 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
