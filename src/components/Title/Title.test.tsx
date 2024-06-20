import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Title } from '@/components/Title/Title';

describe('Title', () => {
  it('renders the title text', () => {
    const testTitle = 'Test Title';
    render(<Title title={testTitle} />);
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
  });
});
