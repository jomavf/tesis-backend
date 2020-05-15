const UserService = require("../services/userService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const users = await UserService.getAll(req.query);
    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}
function updateById(req, res, next) {}
function deleteById(req, res, next) {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
