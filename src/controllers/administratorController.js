const AdministratorService = require("../services/administratorService");

async function getAll(req, res, next) {
  try {
    const users = await AdministratorService.getAll(req.query);
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const loginResponse = await AdministratorService.login(req.body);
    res.status(200).json({
      success: true,
      data: loginResponse,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  login,
};
