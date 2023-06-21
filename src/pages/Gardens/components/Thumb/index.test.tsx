import {render, screen} from '@testing-library/react';
import reactQuery from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {GardenThumb} from './index';

const MOCK_GARDEN = {
  id: 1,
  user_id: 1,
  title: 'Mon beau jardin',
  description: 'Il est beau mon jardin !',
  address: 'coin perdu',
  zipcode: 11111,
  image: '',
  profile_image: '',
  user: {
    id: 1,
    nickname: 'Plouf',
    experience: 1,
    profile_image: '',
  },
};

const mockedUseQuery = jest.fn();

jest.mock('react-query', () => ({
  ...jest.requireActual<typeof reactQuery>('react-query'),
  useQuery: (): jest.Mock => mockedUseQuery,
}));

describe('render', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <GardenThumb garden={MOCK_GARDEN} />
      </BrowserRouter>,
    );
    expect(screen.getByText('Mon beau jardin')).toBeInTheDocument();
  });
});
