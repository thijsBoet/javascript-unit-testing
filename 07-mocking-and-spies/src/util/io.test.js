import { it, expect, afterAll, vi } from 'vitest'

import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', () => {
    const testData = 'Some dummy data for this demo app';
    const testFileName = 'test.txt';

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});