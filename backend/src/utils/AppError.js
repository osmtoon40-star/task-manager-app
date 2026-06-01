/**
 * Custom error class for operational errors
 * Helps distinguish between expected errors and bugs
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;  // Marks errors we expect (validation, auth, etc)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;