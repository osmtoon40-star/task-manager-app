/**
 * Wrapper function to avoid writing try-catch in every controller
 * Any error will be passed to express error handler automatically
 * Saves so much boilerplate code
 */
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchAsync;