import {render} from '@testing-library/react';

import Movie from './Movie';

describe('Movie', () => {
  it('Shows that the movie component is renderd', () => {
    render(<Movie />);
  });
});
