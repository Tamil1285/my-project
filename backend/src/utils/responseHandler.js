const successResponse = (res, message, data) => {
    res.json({ success: true, message, data });
  };
  
  const errorResponse = (res, message, statusCode = 500) => {
    res.status(statusCode).json({ success: false, message });
  };
  
  module.exports = { successResponse, errorResponse };
  