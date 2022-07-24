import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './Navigation';

const Nav = () => {
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>;
};

describe('Check if navigation is rendered', () => {
  it('renders Navigation', () => {
    render(<Nav />);
    const navElement = screen.getByText('Search');
    expect(navElement).toBeInTheDocument();
  });
});
