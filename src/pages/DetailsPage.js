import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import BackButton from '../components/BackButton/BackButton';
import Header from '../components/Header/Header';

export default function DetailsPage() {
  const params = useParams();

  console.log(params.id);

  return (
    <>
      <MovieDetailPoster>
        <p>Movie Poster here</p>
      </MovieDetailPoster>
      <Header />
      <BackButton />
      <main>
        <StyledDetailsPage>
          <h2>Title</h2>
          <div></div>
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
