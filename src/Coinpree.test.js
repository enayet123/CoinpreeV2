import { render, screen } from '@testing-library/react';
import Coinpree from './Coinpree';

test('renders learn react link', () => {
  render(<Coinpree />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
