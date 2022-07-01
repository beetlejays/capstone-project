import styled from 'styled-components';

import Header from '../components/Header/Header';

export default function DetailsPage() {
  return (
    <>
      <Header />
      <StyledDetailsPage>
        <main>
          <section>
            <MovieDetailPoster>Image here</MovieDetailPoster>
            <div>
              <h2>Movie Title here</h2>
              <div>
                <p>Movie thumbnail</p>
                <p>
                  Movie copy text here Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima non ea ab
                  consequatur facere, ex fugit incidunt vel dignissimos, tenetur quibusdam natus repudiandae culpa
                  voluptatum sequi vitae? Sunt, enim.
                </p>
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
