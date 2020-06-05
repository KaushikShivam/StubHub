import { Request, Response, NextFunction } from 'express';

import { RequestValidationError } from './../errors/request-validation-error';

import { DatabaseConnectionError } from './../errors/database-connect-error';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof RequestValidationError) {
	}

	if (err instanceof DatabaseConnectionError) {
	}

	res.status(400).send({
		message: err.message,
	});
};
