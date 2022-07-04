import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import BackButton from '../components/BackButton/BackButton';
import Header from '../components/Header/Header';

export default function DetailsPage({moviesData}) {
  const {id} = useParams();
  const thisMovie = moviesData.find(movie => movie.id === Number(id));

  const posterPath = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <DetailsPageHeader>
        <MovieDetailPoster>
          <MovieDetailPosterImage src={`${posterPath}${thisMovie.backdrop_path}`} alt="" />
        </MovieDetailPoster>
        <div>
          <BackButton />
          <Header />
        </div>
      </DetailsPageHeader>

      <main>
        <StyledDetailsPage>
          <DetailsPageHeadline>{thisMovie.title}</DetailsPageHeadline>
          <ReleaseDate>Release: {thisMovie.release_date}</ReleaseDate>
          <DetailPageContainer>
            <MovieDetailPosterImageDetail src={`${posterPath}${thisMovie.poster_path}`} alt="" />
            <DetailsPageOverview>{thisMovie.overview}</DetailsPageOverview>
          </DetailPageContainer>
        </StyledDetailsPage>
      </main>
    </>
  );
}

const DetailsPageHeader = styled.header`
  max-width: 800px;
  margin: auto;
`;

const ReleaseDate = styled.span`
  font-size: 1rem;
  color: white;
  padding: 0 20px;
`;

const DetailPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 2rem 20px;
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
  width: 100%;
  object-fit: cover;
  margin-top: 60px;
`;

const MovieDetailPoster = styled.div`
  width: 100%;
`;
