import {render, screen} from '@testing-library/react';
import reactQuery from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {MessagePreview} from './index';

const MOCK_PROPS = {
  setCurrentConv: jest.fn(),
  conversation: {
    id: 1,
    chat_sender_id: 2,
    chat_receiver_id: 1,
    latest_message: {
      id: 1,
      content: 'blabla',
    },
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
        <MessagePreview {...MOCK_PROPS} />
      </BrowserRouter>,
    );
    expect(screen.getByText('blabla')).toBeInTheDocument();
  });
});
