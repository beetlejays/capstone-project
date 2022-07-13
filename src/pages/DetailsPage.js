import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function DetailsPage({moviesData}) {
  const [watchList, setWatchList] = useState([]);

  const {id} = useParams();
  const thisMovie = moviesData.find(movie => movie.id === Number(id));
  const posterPath = 'https://image.tmdb.org/t/p/w500';

  function handleAddWatchlist() {
    const addedMovies = [...watchList, thisMovie];
    setWatchList(addedMovies);
    saveToLocalStorage(addedMovies);
    console.log(addedMovies);
  }

  function saveToLocalStorage(addedMovies) {
    window.localStorage.setItem('movme-app', JSON.stringify(addedMovies));
  }

  return (
    <>
      <MovieDetailPoster>
        <MovieDetailPosterImage src={`${posterPath}${thisMovie.backdrop_path}`} alt="" />
      </MovieDetailPoster>
      <div>
        <Header displayBackButton={true} />
      </div>

      <main>
        <StyledDetailsPage>
          <DetailsPageHeadline>{thisMovie.title}</DetailsPageHeadline>
          <ReleaseDate>Release: {thisMovie.release_date ? thisMovie.release_date : 'not available'}</ReleaseDate>

          <DetailPageContainer>
            <MovieDetailPosterImageDetail src={`${posterPath}${thisMovie.poster_path}`} alt="" />
            <DetailsPageOverview>{thisMovie.overview}</DetailsPageOverview>
            <AddToWatchListButton type="button" onClick={handleAddWatchlist}>
              Add to watchlist
            </AddToWatchListButton>
          </DetailPageContainer>
        </StyledDetailsPage>
      </main>
      <Footer />
    </>
  );
}

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

const AddToWatchListButton = styled.button`
  background-color: #3083dc;
  width: 100%;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 1.4rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #2762a1;
  }
`;
