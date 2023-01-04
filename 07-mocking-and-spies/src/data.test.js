import { it, expect, afterAll, describe, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn(() => { });

        // logger.mockImplementationOnce(() => { });

        generateReportData(logger);

        expect(logger).toBeCalled();
    });
});