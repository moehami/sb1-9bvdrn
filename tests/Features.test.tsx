import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features Component', () => {
  it('renders the section title', () => {
    render(<Features />);
    expect(screen.getByText('Why Choose Bin Stores?')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<Features />);
    expect(screen.getByText('Secure Storage')).toBeInTheDocument();
    expect(screen.getByText('24/7 Access')).toBeInTheDocument();
    expect(screen.getByText('Competitive Pricing')).toBeInTheDocument();
    expect(screen.getByText('Convenient Locations')).toBeInTheDocument();
  });

  it('displays feature descriptions', () => {
    render(<Features />);
    expect(screen.getByText(/24\/7 surveillance and advanced security systems/)).toBeInTheDocument();
    expect(screen.getByText(/Access your storage unit any time/)).toBeInTheDocument();
  });
});