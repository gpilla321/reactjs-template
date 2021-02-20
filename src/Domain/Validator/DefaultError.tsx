export default class DefaultError {

    constructor(message: string,
        field: string) {
        this._message = message;
        this._field = field;
    }

    private _message: string;
    private _field: string

    get message(): string {
        return this._message;
    }

    get field(): string {
        return this._field;
    }

    set message(message: string) {
        this._message = message;
    }

    set field(field: string) {
        this._field = field;
    }
}