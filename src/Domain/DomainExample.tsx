import IDefault from "./Interface/IDefault";
import DefaultValidator from "./Validator/DefaultValidator";

export default class DomainExample implements IDefault{
    private defaultValidator = new DefaultValidator();
    private __prop : string = 'Propertie Name'

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

    public isValid(){
        this.defaultValidator.stringIsEmpty(this._prop, 'Propertie Name');

        return this.defaultValidator.isValid();
    }

    public getErrors(){
        return this.defaultValidator.getErrors();
    }
}