const service = require("../services/reservationRestaurantService");

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

async function create(req, res, next) {
  try {
    const data = req.body;
    const newReservation = await service.create(data);
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
    const reservations = await service.getAll();
    res.status(200).json({
      success: true,
      data: reservations,
    });
  } catch (error) {
    next(error);
  }
}

function updateById(req, res, next) {}

module.exports = {
  create,
  getAll,
  createOrUpdate,
  updateById,
  deleteById,
};
