const RestaurantService = require("./../services/restaurantService");

async function createOrUpdate(req, res, next) {
  try {
    const createdRestaurant = await RestaurantService.upsert(req.body);
    res.status(200).json({
      ok: true,
      data: createdRestaurant,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteById(req, res, next) {
  console.log("llegue", req.params.id);

  try {
    const result = await RestaurantService.deleteById(req.params.id);
    console.log(result);
    res.status(200).json({
      ok: true,
      data: null,
    });
  } catch (error) {
    next(error);
  }
}

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

module.exports = {
  createOrUpdate,
  getAll,
  updateById,
  deleteById,
};
