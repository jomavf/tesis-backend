const ReservationService = require("../services/reservationService");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newReservation = await ReservationService.create(data);
    res.json({
      success: true,
      data: newReservation,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const restaurants = await ReservationService.getAll();
    res.status(200).json({
      ok: true,
      data: restaurants,
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
