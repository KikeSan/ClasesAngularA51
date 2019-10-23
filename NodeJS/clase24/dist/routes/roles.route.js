"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const errors_handler_1 = require("../handlers/errors.handler");
const Router = express.Router();
const controller = new controllers_1.ControllerRoles();
Router.get("/", errors_handler_1.catchAsync(controller.listar));
Router.get("/:_id", errors_handler_1.catchAsync(controller.obtenerUno));
Router.post("/", errors_handler_1.catchAsync(controller.insertar));
Router.put("/:_id", errors_handler_1.catchAsync(controller.actualizar));
Router.delete("/:_id", errors_handler_1.catchAsync(controller.eliminar));
exports.default = Router;
//# sourceMappingURL=roles.route.js.map