import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio name', () => {
  render(<App />);
  expect(screen.getAllByText(/mithun/i).length).toBeGreaterThan(0);
});
