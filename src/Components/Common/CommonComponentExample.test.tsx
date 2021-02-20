import { queryByText, render, screen } from '@testing-library/react';
import CommonComponentExample from './CommonComponetExample';

test('should render title', () => {
    const { container } = render(<CommonComponentExample />);

    expect(queryByText(container, /texto h1/i)).toBeInTheDocument();
});

test('should render subtitle propertie when is passed', () => {
    const newSubtitle = 'new subtitle'
    const { container } = render(<CommonComponentExample subtitle={newSubtitle} />)

    expect(queryByText(container, newSubtitle))
});


test('should render subtitle default', () => {
    const { container } = render(<CommonComponentExample/>);
    const subtitle = 'subtitle';

    expect(queryByText(container, subtitle));
});
