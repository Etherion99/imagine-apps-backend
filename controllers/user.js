let userModel = require('../models/user.js')

const getAll = (req, res, next) => {
  res.json(userModel.users);
}

const store = (req, res, next) => {

}

const update = (req, res, next) => {

}

const remove = (req, res, next) => {

}

module.exports = { getAll };