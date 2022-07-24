import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './Footer';

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('Check if footer is rendered', () => {
  it('renders Footer Link', () => {
    render(<MockFooter />);
    const footerElement = screen.getByText('Credits');
    expect(footerElement).toBeInTheDocument();
  });
});
