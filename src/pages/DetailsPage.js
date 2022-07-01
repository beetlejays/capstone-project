import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header/Header';

export default function DetailsPage() {
  const params = useParams();

  return (
    <>
      <StyledDetailsPage>
        <main>
          <section>
            <MovieDetailPoster></MovieDetailPoster>
            <div>
              <h2>{params.title}</h2>
              <div>
                <p>{params.vote_average}</p>
                <img src={`${params.poster_path}`} alt="" />
                <p>{params.original_title}</p>
              </div>
            </div>
          </section>
        </main>
      </StyledDetailsPage>
    </>
  );
}

const StyledDetailsPage = styled.div`
  max-width: 800px;
  margin: auto;
`;

const MovieDetailPoster = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
