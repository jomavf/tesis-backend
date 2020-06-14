const ReservationEventService = require("../services/reservationEventService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const events = await ReservationEventService.getAll(req.query);
    res.status(200).json({
      ok: true,
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
