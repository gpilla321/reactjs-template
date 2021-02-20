import { queryByText, render, screen } from '@testing-library/react';
import PageExample from './PageExample';

test('should render h2 title', () => {
    const { container } = render(<PageExample />);

    expect(queryByText(container, 'title'))
});

test('should render Commom Component with default subtitle', () => {
    const { container } = render(<PageExample />);

    expect(queryByText(container, 'subtitle'));
});

test('should render Commom Component with default new subtitle', () => {
    const newSubtitle = 'different';
    const { container } = render(<PageExample subtitle={newSubtitle}/>);

    expect(queryByText(container, newSubtitle));
});

