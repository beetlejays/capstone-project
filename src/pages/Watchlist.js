import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Watchlist({watchlist}) {
  return (
    <>
      <Header />

      <MainContainer>
        <div>
          {watchlist.length === 0 ? (
            <WatchlistHeadline>There are currently no movies in your watchlist</WatchlistHeadline>
          ) : (
            watchlist.map(addedMovies => (
              <MovieRow key={addedMovies.id}>
                <img src={`https://image.tmdb.org/t/p/w300/${addedMovies.poster_path}`} alt={addedMovies.title} />
                <MovieTitle>{addedMovies.title}</MovieTitle>
              </MovieRow>
            ))
          )}
        </div>
      </MainContainer>

      <Footer />
    </>
  );
}

const MovieTitle = styled.p`
  font-size: 1.3rem;
  padding-left: 1.5rem;
  color: white;
`;

const MovieRow = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: auto;
  }
  &:nth-child(odd) {
    background-color: #333;
  }
`;

const MainContainer = styled.main`
  max-width: 800px;
  margin: 5rem auto 0 auto;
  padding: 0 20px;
`;

const WatchlistHeadline = styled.h1`
  color: #3083dc;
`;
