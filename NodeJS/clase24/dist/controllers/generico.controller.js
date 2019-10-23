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
const httpStatus = require("http-status-codes");
class GenericoController {
    constructor(modelo) {
        this.modelo = modelo;
        this.listar = this.listar.bind(this);
        this.obtenerUno = this.obtenerUno.bind(this);
        this.insertar = this.insertar.bind(this);
        this.actualizar = this.actualizar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.modelo.find();
            res
                .status(httpStatus.OK)
                .json({
                status: httpStatus.OK,
                message: "List",
                results
            });
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.params;
            const result = yield this.modelo.findOne(data);
            res
                .status(httpStatus.OK)
                .json({
                status: httpStatus.OK,
                message: 'Document',
                result
            });
        });
    }
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const usuario = new this.modelo(data);
            yield usuario.save();
            res.status(httpStatus.CREATED).json({
                status: httpStatus.CREATED,
                message: "Document added!"
            });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            const body = req.body;
            yield this.modelo.findOneAndUpdate(params, body);
            res.status(httpStatus.CREATED).json({
                status: httpStatus.CREATED,
                message: "Document update",
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            yield this.modelo.findOneAndRemove(params);
            res.status(httpStatus.CREATED).json({
                status: httpStatus.CREATED,
                message: "Document deleted"
            });
        });
    }
}
exports.default = GenericoController;
//# sourceMappingURL=generico.controller.js.map