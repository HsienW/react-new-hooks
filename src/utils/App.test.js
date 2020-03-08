import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../containers/Provider';

test('renders learn react link', () => {
  const { getByText } = render(<Provider />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
