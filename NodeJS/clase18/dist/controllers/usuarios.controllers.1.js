"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    listar(req, res) {
        res.type("application/json").send({
            name: "Fullstack",
            ruta: req.url
        });
    }
    obtenerUno(req, res) {
        res.type("application/json").send({
            name: "Fullstack Detalle",
            ruta: req.url
        });
    }
    insertar(req, res) {
        res.status(201).json({
            status: 201,
            message: "Usuario insertado"
        });
    }
    actualizar(req, res) {
        res.status(201).json({
            status: 201,
            message: "Usuario actualizado"
        });
    }
    eliminar(req, res) {
        res.status(201).json({
            status: 201,
            message: "Usuario eliminado"
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=usuarios.controllers.1.js.map