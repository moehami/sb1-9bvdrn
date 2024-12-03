import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Newsletter from '../components/Newsletter';

describe('Newsletter Component', () => {
  it('renders the section title', () => {
    render(<Newsletter />);
    expect(screen.getByText('Stay Updated')).toBeInTheDocument();
  });

  it('renders the email input', () => {
    render(<Newsletter />);
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('renders the subscribe button', () => {
    render(<Newsletter />);
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('displays the description text', () => {
    render(<Newsletter />);
    expect(screen.getByText(/Subscribe to our newsletter for the latest storage tips/)).toBeInTheDocument();
  });
});