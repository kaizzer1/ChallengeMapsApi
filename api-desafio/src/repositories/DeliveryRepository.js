const Delivery = require("../models/Delivery");

class DeliveryRepository {
  async store({
    name_client,
    date,
    lat_start,
    lng_start,
    lat_finish,
    lng_finish,
  }) {
    try {
      const delivery = await Delivery.create({
        name_client,
        date,
        lat_start,
        lng_start,
        lat_finish,
        lng_finish,
      });

      return delivery;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async getAll() {
    try {
      const delivery = await Delivery.findAll();

      return delivery;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async getOne({ id }) {
    try {
      const delivery = await Delivery.findByPk(id);

      return delivery;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async update({
    id,
    name_client,
    date,
    lat_start,
    lng_start,
    lat_finish,
    lng_finish,
  }) {
    try {
      const delivery = await Delivery.update(
        {
          name_client,
          date,
          lat_start,
          lng_start,
          lat_finish,
          lng_finish,
        },
        { where: { id } }
      );

      return delivery;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async destroy(id) {
    try {
      const delivery = await Delivery.destroy({ where: { id } });

      return delivery;
    } catch (error) {
      return new Error(error.message);
    }
  }
}

module.exports = new DeliveryRepository();
