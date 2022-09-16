const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Delivery = require("../models/Delivery");

const connection = new Sequelize(dbConfig);

Delivery.init(connection);

module.exports = connection;
