import {render, screen} from '@testing-library/react';
import reactQuery from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {GardenPage} from './index';

const mockedRefetch = jest.fn();

jest.mock('react-query', () => ({
  ...jest.requireActual<typeof reactQuery>('react-query'),
  useQuery: (): {refetch: jest.Mock} => ({
    refetch: mockedRefetch,
  }),
}));

describe('render', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <GardenPage />
      </BrowserRouter>,
    );
    expect(
      screen.getByText('Trouve le jardin de tes rêves !'),
    ).toBeInTheDocument();
  });
});
