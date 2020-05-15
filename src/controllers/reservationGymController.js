const ReservationGymService = require("../services/reservationGymService");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newReservation = await ReservationGymService.create(data);
    return res.json({
      success: true,
      data: newReservation,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const reservations = await ReservationGymService.getAll();
    res.status(200).json({
      ok: true,
      data: reservations,
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
