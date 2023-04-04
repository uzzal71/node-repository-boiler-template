const Response = require('./BaseResponse');

function responseMiddleware(req, res, next) {
  res.apiSuccess = (data) => {
    Response.success(res, data);
  };

  res.apiNotFound = (message) => {
    Response.notFound(res, message);
  };

  res.apiBadRequest = (message) => {
    Response.badRequest(res, message);
  };

  res.apiServerError = (message) => {
    Response.serverError(res, message);
  };

  next();
}

module.exports = responseMiddleware;
