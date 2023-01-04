import { HttpError, ValidationError } from './errors';

describe('Class HttpError', () => {
    it('should contain the provided statusCode, msg and data', () => {
        const testStatus = 404;
        const testMsg = 'Test message';
        const testData = { test: 'test' };

        const testError = new HttpError(testStatus, testMsg, testData);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMsg);
        expect(testError.data).toBe(testData);
    });

    it('should contain undefined as data if no data if provided', () => { 
        const testStatus = 404;
        const testMsg = 'Test message';

        const testError = new HttpError(testStatus, testMsg);

        expect(testError.statusCode).toBe(testStatus);
        expect(testError.message).toBe(testMsg);
        expect(testError.data).toBeUndefined();
    });
});

describe('Class ValidationError', () => {
    it('should contain the provided message', () => {
        const testMsg = 'Test message';

        const testError = new ValidationError(testMsg);

        expect(testError.message).toBe(testMsg);
    });

    it('should contain undefined as data if no data if provided', () => {

        const testError = new ValidationError();

        expect(testError.message).toBeUndefined();
    });
})
