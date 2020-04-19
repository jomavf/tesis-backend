function notFound(req, res, next) {
  const error = new Error(`Resource not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

function handleError(err, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    error: err.message,
    stack: process.env.ENV === "development" ? err.stack : "🎲",
  });
}

module.exports = {
  notFound,
  handleError,
};
