import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './Footer';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />, {wrapper: BrowserRouter});
    const footerElement = screen.getByRole('link', {name: 'Search'});
    expect(footerElement).toBeInTheDocument();
  });
});
