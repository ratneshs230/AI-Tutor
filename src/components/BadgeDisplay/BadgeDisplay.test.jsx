
import React from 'react';
import { render, screen } from '@testing-library/react';
import BadgeDisplay from './BadgeDisplay';

describe('BadgeDisplay', () => {
  const mockBadges = [
    {
      _id: '1',
      badgeId: {
        badgeName: 'Test Badge 1',
        description: 'This is a test badge.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      earnedAt: new Date().toISOString(),
    },
    {
      _id: '2',
      badgeId: {
        badgeName: 'Test Badge 2',
        description: 'This is another test badge.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      earnedAt: new Date().toISOString(),
    },
  ];

  test('renders no badges message when no badges are provided', () => {
    render(<BadgeDisplay badges={[]} />);
    expect(screen.getByText('No badges earned yet. Keep learning!')).toBeInTheDocument();
  });

  test('renders a list of badges', () => {
    render(<BadgeDisplay badges={mockBadges} />);
    
    expect(screen.getByText('Test Badge 1')).toBeInTheDocument();
    expect(screen.getByText('This is a test badge.')).toBeInTheDocument();
    expect(screen.getByText('Test Badge 2')).toBeInTheDocument();
    expect(screen.getByText('This is another test badge.')).toBeInTheDocument();
  });

  test('renders the correct number of badges', () => {
    render(<BadgeDisplay badges={mockBadges} />);
    const badgeElements = screen.getAllByRole('img');
    expect(badgeElements.length).toBe(mockBadges.length);
  });
});
