const LocalService = require("../services/localService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const locals = await LocalService.getAll(req.query);
    res.status(200).json({
      ok: true,
      data: locals,
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
