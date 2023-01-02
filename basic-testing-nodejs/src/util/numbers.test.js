import { transformToNumber } from './numbers';

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