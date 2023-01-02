import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
	it('should trow an error, if any other value than a string is provided', () => {
		const inputEmptyString = '';
		const inputBool = true;
		const inputObj = {};

		const validationFnNum = () => validateStringNotEmpty(inputEmptyString);
		const validationFnBool = () => validateStringNotEmpty(inputBool);
		const validationFnObj = () => validateStringNotEmpty(inputObj);

		expect(validationFnNum).toThrow('Invalid input - must not be empty.');
		expect(validationFnBool).toThrow('value.trim is not a function');
		expect(validationFnObj).toThrow('value.trim is not a function');

	});

	it('should throw an error if a string is empty', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow('Invalid input - must not be empty.');
	});

	it('should trim spaces from input', () => {
		const input = '  string  ';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).not.toThrow();
	});
});

describe('validateNumber()', () => {
	it('should throw an error if a number is NaN', () => {
		const input = NaN;
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow('Invalid number input.');
    });

    it('should throw an error with a message that contains a reason (invalid number)', () => {
        const input = 'a';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow('Invalid number input.');
    });

	it('should throw an error if a number is not a number', () => {
		const input = 'string';
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow('Invalid number input.');
	});

	it('should not throw an error if a number is valid', () => {
		const input = 1;
		const validationFn = () => validateNumber(input);
		expect(validationFn).not.toThrow();
	});
});
