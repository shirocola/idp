import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to the Developer Portal')).toBeInTheDocument();
  });
});
