import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './Footer';

const MockFooter = () => {
  <BrowserRouter>
    <Footer />
  </BrowserRouter>;
};

describe('Footer Links', () => {
  it('renders Footer', () => {
    render(<MockFooter />);
    const footerElement = screen.getByText('Credits');
    expect(footerElement).toBeInTheDocument();
  });
});
