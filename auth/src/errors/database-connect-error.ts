export class DatabaseConnectionError extends Error {
	statusCode = 500;
	reason = 'Error connecting to database';

	constructor() {
		super();

		// Only beause we are extending a build is class
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}

	serializeErrors() {
		return [
			{
				message: this.reason,
			},
		];
	}
}
