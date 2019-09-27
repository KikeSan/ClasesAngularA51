"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const RouterUsuarios = express.Router();
RouterUsuarios.get("/", (req, res) => {
    res.type("application/json").send({
        name: "Fullstack",
        ruta: req.url
    });
});
RouterUsuarios.post("/", (req, res) => {
    res.status(201).json({
        status: 201,
        message: "Usuario insertado"
    });
});
RouterUsuarios.put("/", (req, res) => {
    res.status(201).json({
        status: 201,
        message: "Usuario actualizado"
    });
});
RouterUsuarios.delete("/", (req, res) => {
    res.status(201).json({
        status: 201,
        message: "Usuario eliminado"
    });
});
exports.default = RouterUsuarios;
//# sourceMappingURL=usuarios.route.1.js.map