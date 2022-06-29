import {render, screen} from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('Shows that the header component is rendered', () => {
    render(<Header />);
    screen.getByAltText('mov.me logo');
  });
});
