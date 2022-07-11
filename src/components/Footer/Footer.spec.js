import {render, screen} from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders footer with search and watchlist', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Search');
    expect(footerElement).toBeInTheDocument();
  });
});
