import DomainExample from "../Domain/DomainExample";

export default class ServiceExample {

    public doSomething(): DomainExample {
        return new DomainExample('value');
    }

    public doSomeList(): DomainExample[] {
        return [
            new DomainExample('value'),
            new DomainExample('value2'),
            new DomainExample('value3')
        ]
    }

    public doSomeBooleanThing() : boolean {
        return true;
    }

}