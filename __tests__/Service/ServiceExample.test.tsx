import { queryByText, render, screen } from '@testing-library/react';
import DomainExample from '../../src/Domain/DomainExample';
import ServiceExample from '../../src/Services/ServiceExample';

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
