import Movie from './Movie';

export default {
  title: 'Components/Movie',
  component: Movie,
};

export const Default = () => (
  <Movie
    movie_alt_text="alt text"
    movie_title="Movie title"
    movie_vote_average={7.3}
    movie_poster="https://image.tmdb.org/t/p/w500//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
  />
);
