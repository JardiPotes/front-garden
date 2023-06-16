import {render, screen} from '@testing-library/react';
import reactQuery from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {userStub} from '../../stubs';
import {UserInfo} from './index';

const mockedUseMutation = jest.fn();

jest.mock('react-query', () => ({
  ...jest.requireActual<typeof reactQuery>('react-query'),
  useMutation: (): jest.Mock => mockedUseMutation,
}));

describe('render', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <UserInfo user={userStub} />
      </BrowserRouter>,
    );
    expect(screen.getByText('Mylène Farmer')).toBeInTheDocument();
  });
});
