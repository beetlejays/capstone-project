import styled from 'styled-components';

import defaultPoster from '../../assets/default-movie-poster.jpg';
export default function Movie({movieId, movieVoteAverage, moviePoster, movieTitle, movieAltText}) {
  return (
    <MovieSingle key={movieId}>
      <MovieAverage>
        <MovieAverageNumber>{movieVoteAverage}</MovieAverageNumber>
      </MovieAverage>

      {moviePoster ? (
        <MoviePosterImage src={`https://image.tmdb.org/t/p/w500/${moviePoster}`} alt={`${movieAltText}`} />
      ) : (
        <MoviePosterImage src={defaultPoster} alt="Default poster" />
      )}

      <div>
        <MovieTitle>{movieTitle}</MovieTitle>
      </div>
    </MovieSingle>
  );
}

const MovieSingle = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const MovieAverage = styled.div`
  position: relative;
`;

const MovieAverageNumber = styled.div`
  color: white;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #3083dc;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 5px 5px grey;
  z-index: 1;
`;

const MovieTitle = styled.h3`
  color: white;
  padding: 0.8rem 0;
  font-size: 1rem;
  transition: 0.3s;
  @media (max-width: 410px) {
    font-size: 0.8rem;
  }
  &:hover {
    color: #3083dc;
    text-decoration: none;
  }
`;

const MoviePosterImage = styled.img`
  transition: 0.3s;
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
    filter: brightness(50%);
  }
`;
