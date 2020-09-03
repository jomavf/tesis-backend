const service = require("../services/eventService");

function create(req, res, next) {}
async function createOrUpdate(req, res, next) {
  try {
    const createdItem = await service.upsert(req.body);
    res.status(200).json({
      success: true,
      data: createdItem,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteById(req, res, next) {
  try {
    await service.deleteById(req.params.id);
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
    const events = await service.getAll(req.query);
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    next(error);
  }
}
function updateById(req, res, next) {}

module.exports = {
  create,
  createOrUpdate,
  getAll,
  updateById,
  deleteById,
};
