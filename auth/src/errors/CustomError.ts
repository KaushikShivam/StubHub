export abstract class CustomError extends Error {
	abstract statusCode: number;

	constructor() {
		super();
		// Only beause we are extending a build is class
		Object.setPrototypeOf(this, CustomError.prototype);
	}

	abstract serializeErrors(): { message: string; field?: string }[];
}
