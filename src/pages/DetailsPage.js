import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

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
                backgroundColor="#999"
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
          </DetailPageContainer>
        </StyledDetailsPage>
      </StyledDetailsPageMain>

      <Footer />
    </>
  );
}

const GenreList = styled.ul`
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
