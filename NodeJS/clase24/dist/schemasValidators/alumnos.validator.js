"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const esquemas = {
    getAlumnosDetalle: {
        params: Joi.object().keys({
            id: Joi.number(),
            nivel: Joi.string().regex(/[a-zA-Z]{2}[0-9]{4,10}$/)
        }),
        querys: Joi.object().keys({
            titulo: Joi.string().regex(/^[A-Z]{4,}$/).required()
        })
    }
};
exports.default = esquemas;
//# sourceMappingURL=alumnos.validator.js.map