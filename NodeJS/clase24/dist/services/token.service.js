"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jwt-simple");
const moment = require("moment");
const httpStatus = require("http-status-codes");
const yenv = require("yenv");
const env = yenv(); //para usar las variables del archivo yaml
const crearToken = (_id, roles) => {
    const payload = {
        _id,
        roles,
        iat: moment().unix(),
        exp: moment().add(1, "day").unix()
    };
    const token = jwt.encode(payload, env.KEY_SECRET);
    return token;
};
exports.crearToken = crearToken;
const validarToken = token => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, env.KEY_SECRET);
            resolve(payload);
        }
        catch (error) {
            reject({
                status: httpStatus.UNAUTHORIZED,
                message: error.message
            });
        }
    });
};
exports.validarToken = validarToken;
//# sourceMappingURL=token.service.js.map