class BaseResponser {
    static success(res, data, status = 200) {
      return res.status(status).json({
        success: true,
        data,
      });
    }
  
    static notFound(res, message = 'Resource not found') {
      return res.status(404).json({
        success: false,
        error: {
          message,
        },
      });
    }
  
    static badRequest(res, message = 'Bad request') {
      return res.status(400).json({
        success: false,
        error: {
          message,
        },
      });
    }
  
    static serverError(res, message = 'Server error') {
      return res.status(500).json({
        success: false,
        error: {
          message,
        },
      });
    }
  }
  
  module.exports = BaseResponser;
  