const GymService = require("../services/gymService");

function create(req, res, next) {}

async function createOrUpdate(req, res, next) {
  try {
    const createdGym = await GymService.upsert(req.body);
    res.status(200).json({
      success: true,
      data: createdGym,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteById(req, res, next) {
  try {
    await GymService.deleteById(req.params.id);
    res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const gyms = await GymService.getAll(req.query);
    res.status(200).json({
      success: true,
      data: gyms,
    });
  } catch (error) {
    next(error);
  }
}
function updateById(req, res, next) {}

module.exports = {
  createOrUpdate,
  getAll,
  updateById,
  deleteById,
};
