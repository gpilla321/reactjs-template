export default class DomainExample {

    constructor(propValue: string) {
        this._prop = propValue;
    }

    private _prop: string;

    get prop(): string {
        return this._prop;
    }

    set prop(value: string) {
        this._prop = value;
    }
}