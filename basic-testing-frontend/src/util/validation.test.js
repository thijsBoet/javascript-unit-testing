import { validateStringNotEmpty, validateNumber } from './validation';

it('should trow an error, if an empty string is provided', () => {
    const input = '';
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow('Invalid input - must not be empty.');
});

it('should throw an error if a string is empty', () => {
    const input = '';
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow('Invalid input - must not be empty.');
});

it('should trim spaces from input', () => {
    const input = '  string  ';
    const result = () => validateStringNotEmpty(input);
    expect(result).not.toThrow();
});

it('should throw an error if a number is NaN', () => {
    const input = NaN;
    const result = () => validateNumber(input);
    expect(result).toThrow('Invalid number input.');
});

it('should throw an error if a number is not a number', () => {
    const input = 'string';
    const result = () => validateNumber(input);
    expect(result).toThrow('Invalid number input.');
});

it('should not throw an error if a number is valid', () => {
    const input = 1;
    const result = () => validateNumber(input);
    expect(result).not.toThrow();
});