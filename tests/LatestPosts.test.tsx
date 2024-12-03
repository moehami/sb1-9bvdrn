import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LatestPosts from '../components/LatestPosts';

describe('LatestPosts Component', () => {
  it('renders the section title', () => {
    render(<LatestPosts />);
    expect(screen.getByText('Latest from Our Blog')).toBeInTheDocument();
  });

  it('renders all blog post cards', () => {
    render(<LatestPosts />);
    expect(screen.getByText('How to Choose the Right Storage Unit Size')).toBeInTheDocument();
    expect(screen.getByText('Storage Unit Organization Tips')).toBeInTheDocument();
    expect(screen.getByText('Climate-Controlled vs Standard Units')).toBeInTheDocument();
  });

  it('displays post metadata', () => {
    render(<LatestPosts />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});