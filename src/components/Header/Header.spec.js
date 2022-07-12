import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders header with application logo', () => {
    render(<Header />, {wrapper: BrowserRouter});
    const appLogo = screen.getByAltText('mov.me logo');
    expect(appLogo).toBeInTheDocument();
  });
});
