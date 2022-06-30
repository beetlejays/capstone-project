import {render, screen} from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders header with application logo', () => {
    render(<Header />);
    const appLogo = screen.getByAltText('mov.me logo');
    expect(appLogo).toBeInTheDocument();
  });
});
