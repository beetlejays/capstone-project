import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Watchlist({watchlist}) {
  console.log(watchlist.length);
  return (
    <>
      <Header />
      <MainContainer>
        <div>
          {watchlist.length === 0 ? (
            <WatchlistHeadline>There are currently no movies in your watchlist</WatchlistHeadline>
          ) : (
            watchlist.map(addedMovies => <div key={addedMovies.id}>{addedMovies.title}</div>)
          )}
        </div>
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

const WatchlistHeadline = styled.h1`
  color: #3083dc;
`;
