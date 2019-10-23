"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generico_controller_1 = require("./generico.controller");
const models_1 = require("../models");
const httpStatus = require("http-status-codes");
const bcrypt = require("bcrypt");
const token_service_1 = require("../services/token.service");
class Controller extends generico_controller_1.default {
    constructor() {
        super(models_1.Usuario);
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const usuario = yield models_1.Usuario.findOne({ correo: data.correo.trim().toLowerCase() });
            if (usuario) {
                const coincidencia = yield bcrypt.compare(data.contrasena, usuario.contrasena);
                if (coincidencia) {
                    const token = token_service_1.crearToken(usuario._id, usuario.roles);
                    res
                        .status(httpStatus.OK)
                        .json({
                        status: httpStatus.OK,
                        results: {
                            token
                        }
                    });
                }
                else {
                    res
                        .status(httpStatus.UNAUTHORIZED)
                        .json({
                        status: httpStatus.UNAUTHORIZED,
                        messahe: "Email and/or password invalid"
                    });
                }
            }
            else {
                res
                    .status(httpStatus.UNAUTHORIZED)
                    .json({
                    status: httpStatus.UNAUTHORIZED,
                    message: "User is not logged"
                });
            }
        });
    }
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            //cifrado de la contrseña
            data.contrasena = yield bcrypt.hash(data.contrasena, 10);
            const usuario = new models_1.Usuario(data);
            yield usuario.save();
            res.status(httpStatus.CREATED).json({
                status: httpStatus.CREATED,
                message: "Usuario insertado!"
            });
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=usuarios.controllers.js.map