import { render, screen } from '@testing-library/react';
import Order from './Order.js';

test('renders learn react link', () => {
  render(<Order />);
    const headingElement = screen.getByText("Order");
    expect(headingElement).toBeInTheDocument();
});

