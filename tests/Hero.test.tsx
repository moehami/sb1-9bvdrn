import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Find Storage Units Near You')).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Hero />);
    expect(screen.getByPlaceholderText('Enter your location...')).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Hero />);
    expect(screen.getByText('Search Locations')).toBeInTheDocument();
  });

  it('displays location statistics', () => {
    render(<Hero />);
    expect(screen.getByText('1000+ Locations')).toBeInTheDocument();
    expect(screen.getByText('50 States')).toBeInTheDocument();
  });
});