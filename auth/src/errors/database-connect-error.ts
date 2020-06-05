export class DatabaseConnectionError extends Error {
	reason = 'Error connecting to database';

	constructor() {
		super();

		// Only beause we are extending a build is class
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}
}
