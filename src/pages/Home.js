import {Link} from 'react-router-dom';
import styled from 'styled-components';

import FetchError from '../components/FetchError/FetchError';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Home({displayBackButton, moviesData, error}) {
  const yearDate = new Date().getFullYear();

  return (
    <main>
      <Header displayBackButton={displayBackButton} />

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
                key={movie.id}
                movie_id={movie.id}
                movie_vote_average={movie.vote_average}
                movie_title={movie.title}
                movie_poster={movie.poster_path}
                movie_alt_text={movie.original_title}
              />
            </Link>
          ))}
      </div>
    </main>
  );
}

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
