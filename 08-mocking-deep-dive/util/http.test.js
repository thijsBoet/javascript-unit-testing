import { expect } from 'vitest';
import { HttpError } from './errors';
import {sendDataRequest} from './http'

const testResponseData = {testKey: 'testData'};

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            reject(new Error('Not a string'));
        }
        const testResponse = {
            ok: true,
            status: 200,
            json: () => {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                });
            }
        };
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {
    const testData = {testKey: 'testData'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
    let errorMessage;

    try {
        await sendDataRequest(testData);
    } catch (error) {
        errorMessage = error.message;
    }
    const testData = { testKey: 'testData' };

    return expect(errorMessage).not.toBe('Not a string');
});

it('should throw an error if the response is not ok', async () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                status: 500,
                json: () => {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData);
                    });
                }
            };
            resolve(testResponse);
        });
    });

    const testData = { testKey: 'testData' };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
