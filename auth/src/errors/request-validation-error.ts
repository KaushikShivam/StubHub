import { CustomError } from './CustomError';
import { ValidationError } from 'express-validator';

export class RequestValidationError extends CustomError {
	statusCode = 400;

	constructor(public errors: ValidationError[]) {
		super('Invalid request params');

		// Only beause we are extending a build is class
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}

	serializeErrors() {
		return this.errors.map((error) => {
			return { message: error.msg, field: error.param };
		});
	}
}
