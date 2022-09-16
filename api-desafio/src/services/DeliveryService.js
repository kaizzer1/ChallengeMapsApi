const DeliveryRepository = require("../repositories/DeliveryRepository");

class DeliveryService {
  async store({
    name_client,
    date,
    lat_start,
    lng_start,
    lat_finish,
    lng_finish,
  }) {
    if (!name_client) {
      return new Error("Name field is required");
    }
    if (!date) {
      return new Error("Date field is required");
    }
    if (!lat_start) {
      return new Error("Lat start field is required");
    }
    if (!lng_start) {
      return new Error("lng start field is required");
    }
    if (!lat_finish) {
      return new Error("Lat finish field is required");
    }
    if (!lng_finish) {
      return new Error("Lng finish field is required");
    }

    const response = await DeliveryRepository.store({
      name_client,
      date,
      lat_start,
      lng_start,
      lat_finish,
      lng_finish,
    });

    return response;
  }

  async getAll() {
    const response = await DeliveryRepository.getAll();

    return response;
  }

  async getOne(id) {
    const response = await DeliveryRepository.getOne(id);

    return response;
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
    if (!id) {
      return new Error("id field is required");
    }
    const response = await DeliveryRepository.update({
      id,
      name_client,
      date,
      lat_start,
      lng_start,
      lat_finish,
      lng_finish,
    });

    return response;
  }

  async destroy(id) {
    const response = await DeliveryRepository.destroy(id);

    return response;
  }
}

module.exports = new DeliveryService();
