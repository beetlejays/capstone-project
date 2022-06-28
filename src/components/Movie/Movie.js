import styled from 'styled-components';

export default function Movie({movie_id, movie_vote_average, movie_poster, movie_title, movie_alt_text}) {
  return (
    <MovieSingle key={movie_id}>
      <MovieAverage>
        <MovieAverageNumber>{movie_vote_average}</MovieAverageNumber>
      </MovieAverage>
      <img src={`https://image.tmdb.org/t/p/w500/${movie_poster}`} alt={`${movie_alt_text}`} />

      <div>
        <MovieTitle>{movie_title}</MovieTitle>
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
`;

const MovieTitle = styled.h3`
color: white;
padding: 0.8rem 0;
font-size: 1rem;
}
`;
