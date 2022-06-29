import {render, screen} from '@testing-library/react';

import Movie from './Movie';

describe('Movie', () => {
  it('Shows that the movie poster is being renderd', () => {
    render(<Movie />);
    screen.getByRole('img');
  });
  it('Shows that the movie title is being renderd', () => {
    render(<Movie />);
    screen.getByRole('heading');
  });
});
