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
  const posterPath = 'https://image.tmdb.org/t/p/w500';

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

          <ReleaseDate>Runtime: {parseInt(thisMovie.runtime)}</ReleaseDate>

          <DetailPageContainer>
            {thisMovie.poster_path ? (
              <MovieDetailPosterImageDetail src={`${posterPath}${thisMovie.poster_path}`} alt="" />
            ) : (
              <MovieDetailPosterImageDetail src={defaultMoviePoster} alt="" />
            )}
            <DetailsPageOverview>{thisMovie.overview}</DetailsPageOverview>

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
`;

const MovieDetailPosterImage = styled.img`
  max-width: 100%;
  width: 800px;
  margin: auto;
  margin-top: 60px;
`;

const MovieDetailPoster = styled.main`
  max-width: 800px;
  margin: auto;
`;
