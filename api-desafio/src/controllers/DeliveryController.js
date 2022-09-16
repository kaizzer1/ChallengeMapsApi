const DeliveryService = require("../services/DeliveryService");

class DeliveryController {
  async store(req, res) {
    const response = await DeliveryService.store(req.body);

    if (response instanceof Error) {
      return res.status(400).json(response.message);
    }

    return res.json(response);
  }

  async getAll(req, res) {
    const response = await DeliveryService.getAll();

    if (response instanceof Error) {
      return res.status(400).json(response.message);
    }

    return res.json(response);
  }
  async getOne(req, res) {
    const response = await DeliveryService.getOne(req.params);

    if (response instanceof Error) {
      return res.status(400).json(response.message);
    }

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;

    const { name_client, date, lat_start, lng_start, lat_finish, lng_finish } =
      req.body;

    const response = await DeliveryService.update({
      id,
      name_client,
      date,
      lat_start,
      lng_start,
      lat_finish,
      lng_finish,
    });

    if (response instanceof Error) {
      return res.status(400).json(response.message);
    }

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const response = await DeliveryService.destroy(id);

    if (response instanceof Error) {
      return res.status(400).json(response.message);
    }

    return res.json(response);
  }
}
module.exports = new DeliveryController();
