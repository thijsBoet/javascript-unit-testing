import { it, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

import { showError } from './dom.js';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const { window } = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

describe('showError()', () => {
	beforeEach(() => {
		document.body.innerHTML = '';
		document.write(htmlDocumentContent);
	});

	it('should not contain an error paragraph initially', () => {
		const errorsEl = document.getElementById('errors');
		const errorParagraph = errorsEl.firstElementChild;

		expect(errorParagraph).toBeNull();
	});
	it('should add an error paragraph to the id error element', () => {
		showError('TEST ERROR');

		const errorsEl = document.getElementById('errors');
		const errorParagraph = errorsEl.firstElementChild;

		expect(errorParagraph.textContent).not.toBeNull();
	});

	it('should output the provided msg in errors paragraph', () => {
		const testErrorMsg = 'TEST ERROR';

		showError(testErrorMsg);

		const errorsEl = document.getElementById('errors');
		const errorParagraph = errorsEl.firstElementChild;

		expect(errorParagraph.textContent).toBe(testErrorMsg);
	});
});
