const EventService = require("../services/eventService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const events = await EventService.getAll(req.query);
    res.status(200).json({
      success: true,
      data: events,
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
