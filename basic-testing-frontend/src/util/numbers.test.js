import { expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
	it('should convert string numeric values to a number of type number', () => {
		const numericString = '1';

		const result = transformToNumber(numericString);

		expect(result).toBeTypeOf('number');
	});

	it('should convert string numeric values to a number', () => {
		const numericString = '1';

		const result = transformToNumber(numericString);

		expect(result).toBe(+numericString);
	});

	it('should yield NaN for non-transformable values', () => {
		const nonNumericString = 'invalid';
		const input2 = {};

		const result = transformToNumber(nonNumericString);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

describe('cleanNumbers()', () => {
    it('should return an array of number value if an array of string values is provided', () => {
        const numberValues = ['1', '2', '3'];

        const result = cleanNumbers(numberValues);

        expect(result[0]).toBeTypeOf('number');
    });

    it('should return an array of numbers with the same length as the input', () => {
        const numberValues = ['1', '2', '3'];

        const result = cleanNumbers(numberValues);

        expect(result).toHaveLength(numberValues.length);
    });

    it('should throw an error for invalid input', () => {
        const numberValues = ['1', '2', 'invalid'];

        expect(() => cleanNumbers(numberValues)).toThrow();
    });

    it('should trow an error if an array with at least one empty string is provided', () => {
        const numberValues = ['1', '2', ''];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    });
});