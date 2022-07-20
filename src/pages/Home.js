import {Link} from 'react-router-dom';
import {Link as Scroller} from 'react-scroll';
import styled, {keyframes} from 'styled-components';

import FetchError from '../components/FetchError/FetchError';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Home({moviesData, error}) {
  const yearDate = new Date().getFullYear();

  //////////////////// Showcase star

  const posterPath = 'https://image.tmdb.org/t/p/w1280/';

  return (
    <>
      <main>
        <DesktopHeader>
          <DesktopHeaderContainer>
            {error && <FetchError />}
            {moviesData.length &&
              moviesData.slice(7, 8).map(movie => (
                <Showcase key={movie.id}>
                  <ShowcaseContent>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <LinkCheckoutMovie to="popular" smooth={true} duration={800}>
                      &raquo; Popular movies
                    </LinkCheckoutMovie>
                    <LinkWatchlist to="/search">&raquo; Search movies</LinkWatchlist>
                  </ShowcaseContent>
                  <ShowcaseBackdrop src={`${posterPath}${movie.backdrop_path}`} alt="" />
                </Showcase>
              ))}
          </DesktopHeaderContainer>
        </DesktopHeader>

        <Header />

        <IndexHeadingContainer id="popular">
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

const animateOpacity = keyframes`
0%, 100% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const animateMove = keyframes`
0%, 100% {
    transform: translateY(-30px);
}
100% {
  transform: translateY(0);
}
`;

const Showcase = styled.div`
  animation: ${animateMove} 2s, ${animateOpacity} 3s;
  position: relative;
  color: white;
`;

const ShowcaseBackdrop = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const LinkWatchlist = styled(Link)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  color: white;
  background: orange;
  transition: 0.3s;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 2rem;

  &:hover {
    background: #2767ab;
    transform: translateY(100px);
  }
`;

const LinkCheckoutMovie = styled(Scroller)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  color: white;
  background: #3083dc;
  transition: 0.3s;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 2rem;
  &:hover {
    background: orange;
  }
`;

const DesktopHeaderContainer = styled.div``;

const ShowcaseContent = styled.div`
  position: absolute;
  margin-top: 10rem;
  margin-left: 5rem;
  max-width: 600px;

  p {
    line-height: 1.5;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }
`;

const DesktopHeader = styled.div`
  height: 600px;
  position: relative;
  display: block;

  /*   @media (max-width: 880px) {
    display: none;
  } */
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
