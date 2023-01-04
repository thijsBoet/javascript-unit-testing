import { it, describe, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
	it('should throw an error when empty input is given', () => {
		const testInput = '';

        const validationFn = () => validateNotEmpty(testInput, 'Error message');

		expect(validationFn).toThrow('Error message');
    });

    it('should throw an error when whitespace input is given', () => {
        const testInput = '  ';

        const validationFn = () => validateNotEmpty(testInput, 'Error message');

        expect(validationFn).toThrow('Error message');
    });

    it('should throw an error when undefined input is given', () => {
        const testInput = undefined;

        const validationFn = () => validateNotEmpty(testInput, 'Error message');

        expect(validationFn).toThrow('Error message');
    });

    it('should throw an error with the provided error message', () => { 
        const testInput = '';
        const testErrorMessage = 'Test error message';

        const validationFn = () =>
					validateNotEmpty(testInput, testErrorMessage);

        expect(validationFn).toThrow(testErrorMessage);
    });
});
