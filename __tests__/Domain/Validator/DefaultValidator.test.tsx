import DefaultValidator from "../../../src/Domain/Validator/DefaultValidator";

test('field name should should be equal', () => {
    const valueToTest = 'not empty string';
    const fieldExpected = 'field name'
    const defaultValidator = new DefaultValidator();
    defaultValidator.stringIsEmpty(valueToTest, fieldExpected);

    expect(defaultValidator.getErrors().length).toEqual(0);
});

test('field name should should be equal', () => {
    const valueToTest = '';
    const fieldExpected = 'field name'
    const defaultValidator = new DefaultValidator();
    defaultValidator.stringIsEmpty(valueToTest, fieldExpected);

    expect(defaultValidator.getErrors().length).toEqual(1);
});