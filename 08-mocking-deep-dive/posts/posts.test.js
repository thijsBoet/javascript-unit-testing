import { expect } from 'vitest';
import { extractPostData } from './posts';

const testTitle = 'Test Title';
const testContent = 'Test Content';
let testFormData;

describe('extractPostData()', () => {
	beforeEach(() => {
		testFormData = {
			title: testTitle,
			content: testContent,
			get(identifier) {
				return this[identifier];
			},
		};
	});

	it('should extract the post data from the form data', () => {
		const data = extractPostData(testFormData);

		expect(data.title).toBe(testTitle);
		expect(data.content).toBe(testContent);
	});
});
