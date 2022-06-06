export class ApiError extends Error {
  constructor (status, name, message) {
    super(message)
    this.status = status
    this.name = name
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

export class DatabaseConnectionError extends ApiError {
  constructor (message) {
    super(500, 'DATABASE_CONNECTION_ERROR', message)
  }
}
