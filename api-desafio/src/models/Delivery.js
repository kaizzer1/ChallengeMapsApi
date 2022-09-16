const { Model, DataTypes } = require("sequelize");

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        name_client: DataTypes.STRING,
        date: DataTypes.DATE,
        lat_start: DataTypes.STRING,
        lng_start: DataTypes.STRING,
        lat_finish: DataTypes.STRING,
        lng_finish: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Delivery;
