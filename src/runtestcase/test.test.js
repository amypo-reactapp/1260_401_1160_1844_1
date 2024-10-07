import { render, screen } from '@testing-library/react';
import Maincomponent from '../components/Test';

test('renders learn react link', () => {
  render(<Maincomponent />);
  const linkElement = screen.getByText(/This is main cmponent/i);
  expect(linkElement).toBeInTheDocument();
});
