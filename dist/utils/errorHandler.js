"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    if (err.name === 'ValidationError') {
        const formattedErrors = Object.entries(err.errors).reduce((acc, [key, error]) => {
            acc[key] = {
                message: error.message,
                name: error.name,
                properties: error.properties,
                kind: error.kind,
                path: error.path,
                value: error.value,
            };
            return acc;
        }, {});
        return {
            statusCode: 400,
            message: 'Validation failed',
            success: false,
            error: {
                name: err.name,
                errors: formattedErrors,
            },
            stack: err.stack, // Optional: Include the stack trace for debugging
        };
    }
    // For other errors, return a generic 500 error
    return {
        statusCode: 500,
        message: 'Internal Server Error',
        success: false,
        error: {
            message: err.message || 'An unexpected error occurred',
            stack: err.stack, // Optional: Include the stack trace for debugging
        },
    };
};
exports.handleValidationError = handleValidationError;
