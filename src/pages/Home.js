import {Link} from 'react-router-dom';
import styled from 'styled-components';

import FetchError from '../components/FetchError/FetchError';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Home({moviesData, error}) {
  const yearDate = new Date().getFullYear();

  //////////////////// Showcase star

  const posterPath = 'https://image.tmdb.org/t/p/w1280/';

  const url = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <>
      <main>
        <DesktopHeader>
          <DesktopHeaderContainer>
            {error && <FetchError />}

            {moviesData.length &&
              moviesData.slice(0, 5).map(movie => (
                <Showcase key={movie.id} to={`/${movie.id}`}>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <img src={`${posterPath}${movie.backdrop_path}`} alt="" />
                </Showcase>
              ))}
          </DesktopHeaderContainer>
        </DesktopHeader>

        <Header displayBackButton={false} />

        <IndexHeadingContainer>
          <h1>Check out all current movies</h1>
          <h2>All popular movies from {yearDate}</h2>
        </IndexHeadingContainer>
        <div className="movie__container">
          {error && <FetchError />}

          {moviesData.length &&
            moviesData.map(movie => (
              <Link key={movie.id} to={`/${movie.id}`}>
                <Movie
                  movieId={movie.id}
                  movieVoteAverage={movie.vote_average}
                  movieTitle={movie.title}
                  moviePoster={movie.poster_path}
                  movieAltText={movie.original_title}
                />
              </Link>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

const Showcase = styled.div`
  color: white;
`;

const DesktopHeaderContainer = styled.div`
  position: absolute;
  top: 17rem;
  left: 5rem;
`;

const DesktopHeader = styled.div`
  min-height: 70vh;
  background-color: #999;
  position: relative;
`;

const IndexHeadingContainer = styled.div`
  margin: 100px auto 0 auto;
  max-width: 800px;
  h1 {
    color: #3083dc;
    padding: 0 10px;
    font-size: 1.7rem;
  }
  h2 {
    color: white;
    padding: 0 10px;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
