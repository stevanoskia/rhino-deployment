import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting component', () => {
  it('renders with provided name', () => {
    render(<Greeting name="Andrej" />);
    expect(screen.getByText('Hello, Andrej!')).toBeInTheDocument();
  });
});
