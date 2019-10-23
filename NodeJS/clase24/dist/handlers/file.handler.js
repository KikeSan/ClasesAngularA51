"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const upload = (campo) => {
    const opciones = {};
    const opts = {
        destination(req, file, cb) {
            cb(null, "./public/cv");
        },
        filename(req, file, cb) {
            const nombreOriginal = file.originalname;
            const partes = nombreOriginal.split('.');
            const nuevoNombre = partes.length == 1 ? `${partes[0]}-${Date.now()}` : `${partes[0]}-${Date.now()}.${partes[1]}`;
            req.body[campo] = nuevoNombre;
            cb(null, nuevoNombre);
        }
    };
    opciones.storage = multer.diskStorage(opts);
    return multer(opciones).single(campo);
};
exports.upload = upload;
//# sourceMappingURL=file.handler.js.map