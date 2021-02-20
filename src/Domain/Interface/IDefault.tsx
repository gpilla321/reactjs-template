import DefaultError from "../Validator/DefaultError";

export default interface IDefault {
    isValid() : boolean;
    getErrors() : DefaultError[];
}