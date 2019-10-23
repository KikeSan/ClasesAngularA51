"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const schemasValidators_1 = require("../schemasValidators");
const Router = express.Router();
const controller = new controllers_1.ControllerAlumnos();
Router.get("/", controller.listar);
/* @Validators(esquemasAlumnos.getAlumnosDetalle)
Router.get("/detalle/:id/:nivel",controller.obtenerUno) */
Router.get("/detalle/:id/:nivel", schemasValidators_1.validador(schemasValidators_1.esquemasAlumnos.getAlumnosDetalle), controller.obtenerUno);
Router.post("/", controller.insertar);
Router.put("/", controller.actualizar);
Router.delete("/", controller.eliminar);
exports.default = Router;
//# sourceMappingURL=alumnos.route.js.map