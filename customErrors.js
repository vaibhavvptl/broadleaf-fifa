//400
const errorMessage =require('./errorMessage')

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.timestamp = new Date().toISOString();
    this.status ='Bad Request' 
    this.statusCode = 400;
    this.type = errorMessage.statusCode400
  }
}
  
  //401
  class UnauthorizedRequestError extends Error {
    constructor(message) {
      super(message);
      this.timestamp = new Date().toISOString();
      this.status ='Unauthorized' 
      this.statusCode = 401;
      this.type = errorMessage.statusCode401
    }
  }
  
  //403
  class ForbiddenRequestError extends Error {
    constructor(message) {
      super(message);
      this.timestamp = new Date().toISOString();
      this.status ='Unauthorized' 
      this.statusCode = 403;
      this.type = errorMessage.statusCode401
    }
  }
  
  //404
  class NotFoundError extends Error {
    constructor(message) {
      super(message);
      this.timestamp = new Date().toISOString();
      this.status = ' Resource Not Found'
      this.statusCode = 404;
      this.type = errorMessage.error404

    }
  }
  
  
  
  
  //500
  class InternalServerError extends Error {
    constructor(message) {
      super(message);
      this.timestamp = new Date().toISOString();
      this.status = 'Internal Server'
      this.statusCode =500;
      this.type = errorMessage.error500
    }
  }
  
  module.exports = {
    BadRequestError,
    UnauthorizedRequestError,
    ForbiddenRequestError,
    NotFoundError,
    InternalServerError,
  };
  