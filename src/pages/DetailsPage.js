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
      <MovieDetailPoster></MovieDetailPoster>
      <Header />
      <BackButton />
      <main>
        <StyledDetailsPage>
          <h2>{thisMovie.title}</h2>

          <div>{thisMovie.vote_average}</div>
          <div>
            <img src={`${posterPath}${thisMovie.poster_path}`} alt="" />
          </div>
          <p>{thisMovie.original_title}</p>
        </StyledDetailsPage>
      </main>
    </>
  );
}

const StyledDetailsPage = styled.div`
  max-width: 800px;
  margin: 100px auto 0 auto;
  padding: 0 10px;
`;

const MovieDetailPoster = styled.div`
  width: 100%;
  height: 350px;
  background-color: lightgrey;
`;
