import { generateResultText, outputResult } from './output';

describe('generateResultText()', () => {
	it('should return a string, no matter which value is passed in', () => {
		const valNumber = generateResultText(10);
		const valStr = generateResultText('invalid');
		const valBool = generateResultText('no-calc');

		const resultNum = generateResultText(valNumber);
		const resultStr = generateResultText(valStr);
		const resultBool = generateResultText(valBool);

		expect(resultNum).toBeTypeOf('string');
		expect(resultStr).toBeTypeOf('string');
		expect(resultBool).toBeTypeOf('string');
	});

	it('should return a string that contains the calculation result if a number is provided as a result', () => {
		const result = 5;

		const resultText = generateResultText(result);

		expect(resultText).toContain(result.toString());
	});

	it('should return an empty string if "no-calc" is provided as a result', () => {
		const result = 'no-calc';

		const resultText = generateResultText(result);

		expect(resultText).toBe('');
	});

	it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
		const result = 'invalid';

		const resultText = generateResultText(result);

		expect(resultText).toContain('Invalid');
	});
});
