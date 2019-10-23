"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const errors_handler_1 = require("../handlers/errors.handler");
const authentication_policy_1 = require("../policies/authentication.policy");
const file_handler_1 = require("../handlers/file.handler");
const Router = express.Router();
const controller = new controllers_1.ControllerUsuarios();
Router.get("/", authentication_policy_1.authentication, /* authorization("Admin","Auditor"), */ errors_handler_1.catchAsync(controller.listar));
Router.get("/:_id", errors_handler_1.catchAsync(controller.obtenerUno));
Router.post("/", file_handler_1.upload("cv"), errors_handler_1.catchAsync(controller.insertar));
Router.post("/login", errors_handler_1.catchAsync(controller.login));
Router.put("/:_id", errors_handler_1.catchAsync(controller.actualizar));
Router.delete("/:_id", errors_handler_1.catchAsync(controller.eliminar));
exports.default = Router;
//# sourceMappingURL=usuarios.route.js.map