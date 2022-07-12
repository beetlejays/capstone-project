import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Watchlist() {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>There are currently no movies in your watchlist</h1>
      </MainContainer>

      <Footer />
    </>
  );
}

const MainContainer = styled.main`
  max-width: 800px;
  margin: 5rem auto 0 auto;
  padding: 0 20px;
`;
