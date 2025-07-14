export const sendResponse = (res, status, msg, data = null) => {
  res.status(status ? 200 : 400).json({
    status,
    message: msg,
    content: data,
  });
};

// ✅ Send server error
export const sendError = (res, error) => {
  res.status(500).json({
    status: false,
    message: error.message || "Internal Server Error",
  });
};