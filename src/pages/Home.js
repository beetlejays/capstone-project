import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroller} from 'react-scroll';
import styled, {keyframes} from 'styled-components';

import FetchError from '../components/FetchError/FetchError';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Home({moviesData, error, onNextApiUrl, currentPage}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yearDate = new Date().getFullYear();
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
                  <ShowcaseBackdrop src={`${posterPath}${movie.backdrop_path}`} alt="" />
                  <ShowcaseContent>
                    <IndexHeading>
                      <LogoSpanStart>mov</LogoSpanStart>.<LogoSpanEnd>me</LogoSpanEnd> | save your movies for later
                    </IndexHeading>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <LinkCheckoutMovie to="popular" smooth={true} duration={800}>
                      &raquo;Popular
                    </LinkCheckoutMovie>
                    <LinkWatchlist to="/search">&raquo;Search </LinkWatchlist>
                  </ShowcaseContent>
                </Showcase>
              ))}
          </DesktopHeaderContainer>
        </DesktopHeader>

        <Header />

        <IndexHeadingContainer id="popular">
          <h3>Check out all current movies</h3>
          <h4>All popular movies from {yearDate}</h4>
          <button onClick={onNextApiUrl}>Get more results</button>
          <p>{currentPage}</p>
        </IndexHeadingContainer>

        <PopularMovies className="movie__container">
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
        </PopularMovies>
      </main>
      <Footer />
    </>
  );
}

const LogoSpanStart = styled.span`
  color: #ccc;
  font-weight: 700;
  font-size: 2.4rem;
`;
const LogoSpanEnd = styled.span`
  color: #3083dc;
  font-weight: 700;
  font-size: 2.4rem;
`;

const IndexHeading = styled.h1`
  margin-top: 2rem;
  padding-bottom: 3rem;
  font-size: 1.8rem;
  font-weight: 400;
  @media (max-width: 560px) {
    padding-bottom: 2rem;
  }
`;

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

const animatePopularMovies = keyframes`
0%, 100% {
    transform: translateY(30px);
}
100% {
  transform: translateY(0);
}
`;

const PopularMovies = styled.div`
  animation: ${animatePopularMovies} 2s, ${animateOpacity} 2s;
`;

const Showcase = styled.div`
  animation: ${animateMove} 2s, ${animateOpacity} 2s;
  position: relative;
  color: white;
`;

const ShowcaseBackdrop = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  padding-top: 3rem;
  @media (max-width: 560px) {
    height: 300px;
  }
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
  word-break: keep-all;
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
  word-break: keep-all;
  &:hover {
    background: orange;
  }
`;

const DesktopHeaderContainer = styled.div``;

const ShowcaseContent = styled.div`
  position: absolute;
  top: 7rem;
  left: 4rem;
  max-width: 600px;
  padding-right: 20px;

  p {
    line-height: 1.5;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 560px) {
    position: static;
    padding-left: 20px;

    p {
      display: none;
    }
    h2 {
      display: none;
    }
  }
`;

const DesktopHeader = styled.header`
  height: 600px;
  position: relative;
  display: block;

  @media (max-width: 560px) {
    height: auto;
  }
`;

const IndexHeadingContainer = styled.div`
  margin: 100px auto 0 auto;
  max-width: 800px;
  h3 {
    color: #3083dc;
    padding: 0 10px;
    font-size: 1.7rem;
  }
  h4 {
    color: white;
    padding: 0 10px;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
