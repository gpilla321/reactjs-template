import { queryByText, render, screen } from '@testing-library/react';
import DomainExample from '../Domain/DomainExample';
import ServiceExample from './ServiceExample';

test('should return true', () => {
    const serviceExample = new ServiceExample();

    expect(serviceExample.doSomeBooleanThing()).toBeTruthy();
});

test('should return a domain example', () => {
    const serviceExample = new ServiceExample();

    expect(serviceExample.doSomething()).toBeInstanceOf(DomainExample);
})

test('should return a domain example list', () => {
    const serviceExample = new ServiceExample();

    expect(serviceExample.doSomeList()[0]).toBeInstanceOf(DomainExample);
});
