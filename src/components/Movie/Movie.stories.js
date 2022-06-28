import Movie from './Movie';

export default {
  title: 'Components/Movie',
  component: Movie,
};

const Template = args => <Movie {...args} />;

export const Default = Template.bind({});

Default.args = {
  alt: 'Movie Title',
  movie_alt_text: 'Scream',
  movie_vote_average: 7.3,
};
