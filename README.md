# standard-api-errors

Standard API errors. Can be used in nodejs to standardize your error responses, and also on the frontend in the API connector layer, so you can throw the same exceptions that was thrown on the backend. For example, the [standard-json-api-connectors](https://www.npmjs.com/package/standard-json-api-connectors) lib uses these errors, to throw exceptions whenever the HTTP status code is in the 400-599 range.

## ApiError

All of the other errors inherit from `ApiError`.

***Constructor params:***
- **status:** the HTTP status of the error.
- **name:** the name of the error, should be in UPPER_CASE_WITH_SNAKE_CASE.
- **message:** the error message.

***Instance properties:***
 - **status:** set by the constructor.
 - **name:** set by the constructor.
 - **message:** set by the constructor.

***Instance methods:***
 - **toObject**: creates a plain object from the instance properties in the following format:
   ```javascript
   {
     status,
     error: {
       name,
       message
     }
   }
   ```


## ValidationError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 400
 - **name:** 'VALIDATION_ERROR'
 - **message:** set by the constructor.


## AuthenticationError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 401
 - **name:** 'AUTHENTICATION_ERROR'
 - **message:** set by the constructor.


## AuthorizationError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 403
 - **name:** 'AUTHORIZATION_ERROR'
 - **message:** set by the constructor.


## NotFoundError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 404
 - **name:** 'NOT_FOUND'
 - **message:** set by the constructor.


## MethodNotAllowedError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 405
 - **name:** 'METHOD_NOT_ALLOWED'
 - **message:** set by the constructor.


## ConflictError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 409
 - **name:** 'CONFLICT'
 - **message:** set by the constructor.


## PayloadTooLargeError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 413
 - **name:** 'PAYLOAD_TOO_LARGE'
 - **message:** set by the constructor.


## TooManyRequestsError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 429
 - **name:** 'TOO_MANY_REQUESTS'
 - **message:** set by the constructor.


## InternalServerError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 500
 - **name:** 'INTERNAL_SERVER_ERROR'
 - **message:** set by the constructor.


## DatabaseConnectionError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 500
 - **name:** 'DATABASE_CONNECTION_ERROR'
 - **message:** set by the constructor.


## NotImplementedError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 501
 - **name:** 'NOT_IMPLEMENTED'
 - **message:** set by the constructor.


## BadGatewayError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 502
 - **name:** 'BAD_GATEWAY'
 - **message:** set by the constructor.


## ServiceUnavailableError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 503
 - **name:** 'SERVICE_UNAVAILABLE'
 - **message:** set by the constructor.


## GatewayTimeoutError

Constructor params:
 - **message:** the error message.

Instance properties
 - **status:** 504
 - **name:** 'GATEWAY_TIMEOUT'
 - **message:** set by the constructor.
