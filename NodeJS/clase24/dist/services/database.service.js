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
const mongoose = require("mongoose");
const configDatabase = require("../config/database.config");
const inicializarBaseDatos = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose.Promise = global.Promise;
    const promiseConnection = new Promise((resolve, reject) => {
        mongoose.connect(configDatabase.connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on("connected", () => {
            console.log("Conectado a Mongo!!!!");
            require("../models").Usuario;
            require("../models").Rol;
            resolve();
        });
        mongoose.connection.on("error", error => {
            console.log("Ocurrió un error");
            console.log(error);
            reject(error);
        });
    });
    yield promiseConnection;
});
exports.inicializarBaseDatos = inicializarBaseDatos;
//# sourceMappingURL=database.service.js.map