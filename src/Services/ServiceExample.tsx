import DomainExample from "../Domain/DomainExample";

export default class ServiceExample {

    public doSomething(): DomainExample {
        return new DomainExample('value');
    }



}