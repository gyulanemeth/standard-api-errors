export class ApiError extends Error {
  constructor (status, name, message) {
    super(message)
    this.status = status
    this.name = name
  }

  toJson() {
    return {
      status: this.status,
      error: {
        name: this.name,
        message: this.message
      }
    }
  }
}

export class ValidationError extends ApiError {
  constructor (message) {
    super(400, 'VALIDATION_ERROR', message)
  }
}

export class AuthenticationError extends ApiError {
  constructor (message) {
    super(401, 'AUTHENTICATION_ERROR', message)
  }
}

export class AuthorizationError extends ApiError {
  constructor (message) {
    super(403, 'AUTHORIZATION_ERROR', message)
  }
}

export class NotFoundError extends ApiError {
  constructor (message) {
    super(404, 'NOT_FOUND', message)
  }
}

export class MongooseNotFoundError extends NotFoundError {
  constructor (Model, filter) {
    super(`${Model.modelName} with ${JSON.stringify(filter)} is not found.`)
  }
}

export class MethodNotAllowedError extends ApiError {
  constructor (message) {
    super(405, 'METHOD_NOT_ALLOWED', message)
  }
}

export class ConflictError extends ApiError {
  constructor (message) {
    super(409, 'CONFLICT', message)
  }
}

export class PayloadTooLargeError extends ApiError {
  constructor (message) {
    super(413, 'PAYLOAD_TOO_LARGE', message)
  }
}

export class TooManyRequestsError extends ApiError {
  constructor (message) {
    super(429, 'TOO_MANY_REQUESTS', message)
  }
}

export class InternalServerError extends ApiError {
  constructor (message) {
    super(500, 'INTERNAL_SERVER_ERROR', message)
  }
}

export class DatabaseConnectionError extends ApiError {
  constructor (message) {
    super(500, 'DATABASE_CONNECTION_ERROR', message)
  }
}

export class NotImplementedError extends ApiError {
  constructor (message) {
    super(501, 'NOT_IMPLEMENTED', message)
  }
}

export class BadGatewayError extends ApiError {
  constructor (message) {
    super(502, 'BAD_GATEWAY', message)
  }
}

export class ServiceUnavailableError extends ApiError {
  constructor (message) {
    super(503, 'SERVICE_UNAVAILABLE', message)
  }
}

export class GatewayTimeoutError extends ApiError {
  constructor (message) {
    super(504, 'GATEWAY_TIMEOUT', message)
  }
}
