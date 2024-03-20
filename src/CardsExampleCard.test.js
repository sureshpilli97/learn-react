// CardExampleCard.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardExampleCard from './CardExampleCard';

describe('CardExampleCard', () => {
  const mockProps = {
    onClick: jest.fn(),
    props: {
      image: 'https://example.com/image.jpg',
      firstName: 'John',
      description: 'A description',
    },
  };

  test('renders correctly', () => {
    render(<CardExampleCard {...mockProps} />);
    expect(screen.getByText(mockProps.props.firstName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.props.description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.props.image);
    expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.props.image);
  });

  test('calls onClick handler when clicked', () => {
    render(<CardExampleCard {...mockProps} />);
    fireEvent.click(screen.getByTestId('AppCard'));
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
