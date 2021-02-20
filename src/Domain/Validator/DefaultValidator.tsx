import DefaultError from "./DefaultError";
import { STRING_NOT_EMPTY } from '../../Resources/ErrorList';

export default class DefaultValidator {
    private _errorList: DefaultError[] = [];

    public isValid() {
        return this._errorList.length === 0;
    }

    public getErrors() {
        return this._errorList;
    }

    public stringIsEmpty(value: string, field: string) {
        if (value.trim() === '') {
            this.setError(STRING_NOT_EMPTY, field)
        }
    }

    private setError(message: string, field: string) {
        this._errorList.push(new DefaultError(message, field));
    }
}