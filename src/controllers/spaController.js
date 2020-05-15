const SpaService = require("../services/spaService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const spas = await SpaService.getAll(req.query);
    res.status(200).json({
      ok: true,
      data: spas,
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
