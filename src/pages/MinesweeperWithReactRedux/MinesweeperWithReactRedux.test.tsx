import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { store } from '@/store';

import { MinesweeperWithReactRedux } from './MinesweeperWithReactRedux';

it('MinesweeperWithReactRedux renders correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MinesweeperWithReactRedux />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
