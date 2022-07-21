import {render, screen} from '@testing-library/react';

import Footer from './Footer';

describe('footer', () => {
  it('renders the footer', async () => {
    render(<Footer />);
    const footerElement = await screen.findByRole('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
