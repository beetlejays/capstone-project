import GlobalStyles from '../src/GlobalStyles.js';
import {MemoryRouter} from 'react-router-dom';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const decorators = [
  Story => (
    <>
      <MemoryRouter>
        <GlobalStyles />
        <Story />
      </MemoryRouter>
    </>
  ),
];
