import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

import defaultPosterBackdrop from '../assets/default-movie-backdrop.jpg';
import defaultMoviePoster from '../assets/default-movie-poster.jpg';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import WatchListButton from '../components/WatchListButton/WatchListButton';

export default function DetailsPage({moviesData, onAddToWatchList, watchlist}) {
  const {id} = useParams();
  const thisMovie = moviesData.find(movie => movie.id === Number(id));
  const posterPath = 'https://image.tmdb.org/t/p/w1280';

  const url = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const urlPath = `${url}${id}?api_key=${API_KEY}`;

  const [singleMovie, setSingleMovie] = useState([]);
  const genres = singleMovie?.genres;

  async function fetchSingleMovieData() {
    try {
      const response = await fetch(urlPath);
      if (response.ok) {
        const singleMovieData = await response.json();
        setSingleMovie(singleMovieData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSingleMovieData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MovieDetailPoster>
        {thisMovie.backdrop_path ? (
          <MovieDetailPosterImage src={`${posterPath}${thisMovie.backdrop_path}`} alt="" />
        ) : (
          <MovieDetailPosterImage src={defaultPosterBackdrop} alt="" />
        )}
      </MovieDetailPoster>
      <div>
        <Header displayBackButton={true} />
      </div>

      <StyledDetailsPageMain>
        <StyledDetailsPage>
          <DetailsPageHeadline>{thisMovie.title}</DetailsPageHeadline>
          <ReleaseDate>Release: {thisMovie.release_date ? thisMovie.release_date : 'not available'}</ReleaseDate>
          <ReleaseDate>
            Language: {thisMovie.original_language ? thisMovie.original_language : 'not available'}
          </ReleaseDate>

          <DetailPageContainer>
            {thisMovie.poster_path ? (
              <MovieDetailPosterImageDetail src={`${posterPath}${thisMovie.poster_path}`} alt="" />
            ) : (
              <MovieDetailPosterImageDetail src={defaultMoviePoster} alt="" />
            )}

            <div>
              <GenreList>
                {genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </GenreList>
              <DetailsPageOverview>{thisMovie.overview}</DetailsPageOverview>
            </div>
            {watchlist.includes(thisMovie) ? (
              <WatchListButton
                backgroundColor="orange"
                buttonText="X Remove from watchlist"
                onClick={() => onAddToWatchList(thisMovie)}
              />
            ) : (
              <WatchListButton
                backgroundColor="#3083dc"
                buttonText="+ Add to watchlist"
                onClick={() => onAddToWatchList(thisMovie)}
              />
            )}
            <GoToWatchlist to="/watchlist"> &raquo; View watchlist</GoToWatchlist>
          </DetailPageContainer>
        </StyledDetailsPage>
      </StyledDetailsPageMain>

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

const animateGenre = keyframes`
0%, 100% {
    transform: translateY(30px);
}
100% {
  transform: translateY(0);
}
`;

const GoToWatchlist = styled(Link)`
  font-size: 1.2rem;
  color: orange;
  background: #323232;
  align-self: center;
  font-weight: 500;
  margin-right: auto;
  transition: 0.4s;
  border: 2px solid orange;
  border-radius: 8px;
  padding: 0.8rem 1.3rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
  &:hover {
    color: #3083dc;
    border: 2px solid #3083dc;
    margin-left: 5px;
  }
`;

const GenreList = styled.ul`
  animation: ${animateGenre} 1s, ${animateOpacity} 1s;
  padding-bottom: 1rem;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  color: white;
  font-weight: 600;
  li {
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    margin: 0 14px 14px 0;
    background: #3083dc;
  }
`;

const StyledDetailsPageMain = styled.main`
  width: 100%;
  margin: auto;
  background: #323232;
`;

const ReleaseDate = styled.span`
  font-size: 1rem;
  color: white;
  padding: 0 20px;
`;

const DetailPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 2rem 20px 6rem 20px;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DetailsPageOverview = styled.p`
  color: white;
  line-height: 1.7;
`;

const DetailsPageHeadline = styled.h1`
  font-size: 1.4rem;
  color: #3083dc;
  padding: 10px 20px 5px 20px;
`;

const StyledDetailsPage = styled.div`
  max-width: 800px;
  padding: 20px 0 10px 0;
  margin: auto;
`;

const MovieDetailPosterImageDetail = styled.img`
  max-width: 100%;
  width: 200px;
  border-radius: 4px;
`;

const MovieDetailPosterImage = styled.img`
  animation: ${animateMove} 1s, ${animateOpacity} 1s;
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin: auto;
  margin-top: 60px;
  border-radius: 4px;
`;

const MovieDetailPoster = styled.main`
  margin: auto;
`;
