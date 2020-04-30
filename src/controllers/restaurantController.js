const RestaurantService = require("./../services/restaurantService");

function create(req, res, next) {}

async function getAll(req, res, next) {
  try {
    const restaurants = await RestaurantService.getAll(req.query);
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
