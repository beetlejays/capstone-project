import Movie from './Movie';

export default {
  title: 'Components/Movie',
  component: Movie,
};

const Template = args => <Movie {...args} />;

export const Default = Template.bind({});

Default.args = {
  movieTitle: 'The secrets of Dumbledore',
  movieVoteAverage: '7.3',
  moviePoster: 'https://image.tmdb.org/t/p/w500//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
};
