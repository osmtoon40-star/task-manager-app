/**
 * Role-based authorization middleware
 * Used after protect middleware (so req.user already exists)
 * 
 * @param  {...string} roles - Allowed roles (e.g., 'admin', 'user')
 */
const restrictTo = (...roles) => {
  return (req, res, next) => {
    // Check if user's role is in the allowed roles array
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. ${req.user.role} role cannot access this resource.`
      });
    }
    next();
  };
};

module.exports = { restrictTo };