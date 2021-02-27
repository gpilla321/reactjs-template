import DefaultError from "../../../src/Domain/Validator/DefaultError";

test('message error should be equal', () => {
    const messageExpected = 'Message';
    const fieldNameExpected = 'Field name';
    const defaultError = new DefaultError(messageExpected, fieldNameExpected);

    expect(defaultError.message).toBe(messageExpected);
});

test('field name should should be equal', () => {
    const messageExpected = 'Message';
    const fieldNameExpected = 'Field name';
    const defaultError = new DefaultError(messageExpected, fieldNameExpected);

    expect(defaultError.field).toBe(fieldNameExpected);
});