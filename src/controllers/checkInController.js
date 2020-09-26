const service = require("../services/checkInService");
const AccountService = require("../services/accountService");
const ConfigurationService = require("../services/configurationService");
const configurationService = require("../services/configurationService");

function create(req, res, next) {}

async function createOrUpdate(req, res, next) {
  try {
    const { language, should_show_on_boarding, currency, ...rest } = req.body;
    console.log("{ language, should_show_on_boarding, currency, ...rest }", {
      language,
      should_show_on_boarding,
      currency,
      ...rest,
    });
    const [createdConfiguration] = await configurationService.upsert({
      language,
      should_show_on_boarding,
      currency,
    });
    const [createdItem] = await service.upsert({
      ...rest,
      configuration_id: createdConfiguration.id,
    });
    if (createdItem) {
      const createdAccount = await AccountService.create({
        total_amount: 0,
        billing_date_start: createdItem.start_date,
        billing_date_end: createdItem.end_date,
        guest_id: createdItem.guest_id,
      });
      console.log("creteadItem", JSON.stringify(createdAccount));
    }

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
    const data = await service.getAll(req.query);
    res.status(200).json({
      success: true,
      data: data,
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
