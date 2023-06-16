import {fireEvent, render, screen} from '@testing-library/react';
import reactQuery from 'react-query';
import reactRouterDom from 'react-router-dom';

import HomePage from './index';

const mockedUsedNavigate = jest.fn();
const mockedUseMutation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof reactRouterDom>('react-router-dom'),
  useNavigate: (): jest.Mock => mockedUsedNavigate,
}));

jest.mock('react-query', () => ({
  ...jest.requireActual<typeof reactQuery>('react-query'),
  useMutation: (): jest.Mock => mockedUseMutation,
}));

describe('render', () => {
  it('should render without crash', () => {
    render(<HomePage />);
    expect(
      screen.getByText('La Première Communauté pour Jardiner Ensemble !'),
    ).toBeInTheDocument();
  });
  it('should open login modal when clicked', () => {
    render(<HomePage />);
    const login = screen.getByText('REJOINS-NOUS');
    fireEvent.click(login);
    expect(screen.getByText('ALORS, ON PLANTE ?')).toBeInTheDocument();
  });
});
