import { queryByText, render, screen } from '@testing-library/react';
import { domain } from 'process';
import DomainExample from './DomainExample';

test('should create object and validate value', () => {
    const expectedValue = 'value';
    const domainExample = new DomainExample(expectedValue);

    expect(domainExample.prop).toBe(expectedValue);
});

test('should change value of created object', () => {
    const startValue = 'value';
    const newValue = 'newValue';
    const domainExample = new DomainExample(startValue);
    domainExample.prop = newValue;
    
    expect(domainExample.prop).toBe(newValue);
});