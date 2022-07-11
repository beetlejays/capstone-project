import {render, screen} from '@testing-library/react';

import Movie from './Movie';

describe('Movie', () => {
  it('renders the movie poster', () => {
    render(<Movie />);
    const movieImage = screen.getByText('MoviePosterImage');
    expect(movieImage).toBeInTheDocument();
  });
  it('renders the movie title', () => {
    render(<Movie />);
    const movieTitleHeading = screen.getByRole('heading');
    expect(movieTitleHeading).toBeInTheDocument();
  });
});
