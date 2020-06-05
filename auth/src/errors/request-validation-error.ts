import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
	constructor(public errors: ValidationError[]) {
		super();

		// Only beause we are extending a build is class
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}
}
