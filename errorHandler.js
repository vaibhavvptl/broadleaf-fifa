const { error } = require('./responseGenerator');

const errorHandler = (err, request, response, next) => {
    console.log('hi')
  return response.status(err?.statusCode || err[0]?.statusCode || 500).json(error(err));
};

module.exports = errorHandler;
