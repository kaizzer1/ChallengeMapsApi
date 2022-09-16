const express = require("express");
const DeliveryController = require("./controllers/DeliveryController");

const routes = express.Router();

//Delivery
routes.post("/delivery", DeliveryController.store);
routes.get("/deliveries", DeliveryController.getAll);
routes.get("/delivery/:id", DeliveryController.getOne);
routes.put("/deliveries/:id", DeliveryController.update);
routes.delete("/delivery/:id", DeliveryController.destroy);

module.exports = routes;
