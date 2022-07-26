import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './Navigation';

describe('Check if navigation is rendered', () => {
  it('renders Navigation', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const navElement = screen.getByText('Search');
    expect(navElement).toBeInTheDocument();
  });
});
