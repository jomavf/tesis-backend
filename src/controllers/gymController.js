const GymService = require("../services/gymService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const gyms = await GymService.getAll(req.query);
    res.status(200).json({
      ok: true,
      data: gyms,
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
