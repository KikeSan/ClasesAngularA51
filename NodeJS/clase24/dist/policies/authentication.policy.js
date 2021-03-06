"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status-codes");
const token_service_1 = require("../services/token.service");
const authentication = (req, res, next) => {
    const authorization = req.headers["authorization"];
    if (authorization) {
        const parts = authorization.split(' ');
        if (parts.length == 2) {
            const token = parts[1];
            token_service_1.validarToken(token)
                .then((payload) => {
                console.log(payload);
                //almacena los roles
                res.locals = payload.roles;
                next();
            })
                .catch(error => {
                res
                    .status(error.status)
                    .json(error);
            });
        }
        else {
            //Envió la cabecera pero no el token
            res
                .status(httpStatus.UNAUTHORIZED)
                .json({
                status: httpStatus.UNAUTHORIZED,
                message: "User is not logged"
            });
        }
    }
    else {
        //La peticion no contiene la cabecera "authorization"
        res
            .status(httpStatus.UNAUTHORIZED)
            .json({
            status: httpStatus.UNAUTHORIZED,
            message: "User is not logged"
        });
    }
};
exports.authentication = authentication;
const authorization = (...rolesPermitidos) => {
    return (req, res, next) => {
        const rolesUsuario = res.locals.map(rol => rol.nombre);
        let permitido = false;
        rolesUsuario.forEach(rol => {
            if (rolesPermitidos.indexOf(rol) > -1)
                permitido = true;
        });
        if (permitido) {
            next();
        }
        else {
            res
                .status(httpStatus.FORBIDDEN)
                .json({
                status: httpStatus.FORBIDDEN,
                message: "Forbidden resource"
            });
        }
    };
};
exports.authorization = authorization;
//# sourceMappingURL=authentication.policy.js.map