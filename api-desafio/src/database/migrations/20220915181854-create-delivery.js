"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("deliveries", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      lat_start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lng_start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lat_finish: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lng_finish: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("deliveries");
  },
};
