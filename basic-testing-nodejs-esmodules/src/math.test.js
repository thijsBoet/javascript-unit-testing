// import { it, expect } from 'vitest';

import { add } from './math';

it('should add all numbers in an array', () => {
	// Arrange
	const numbers = [1, 2, 3];

	// Act
	const result = add(numbers);

	// Assert
	const expectedResult = numbers.reduce((sum, currentValue) => sum + currentValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
	const inputs = ['a', 2, 3];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric strings is provided', () => {
	const numbers = ['1', '2', '3'];

	const result = add(numbers);

	const expectedResult = numbers.reduce((sum, currentValue) => +sum + +currentValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
	const numbers = [];

	const result = add(numbers);

	expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
	const resultFn = () => add();

	expect(resultFn).toThrow(/is not iterable/gi);
});

it('should throw an error if a non-array value is passed into the function', () => {
	const resultFn = () => add(1, 2, 3);

	expect(resultFn).toThrow(/is not iterable/gi);
});