import {render, screen} from '@testing-library/react';

import {Message} from './index';

const MOCK_PROPS = {
  currentConv: {
    nickname: 'bidule',
    profile_image: 'string',
  },
  message: {
    id: 1,
    sender_id: 1,
    content: 'coucou',
    sent_at: '',
  },
};

describe('render', () => {
  it('should render without crash', () => {
    render(<Message {...MOCK_PROPS} />);
    expect(screen.getByText('coucou')).toBeInTheDocument();
  });
});
