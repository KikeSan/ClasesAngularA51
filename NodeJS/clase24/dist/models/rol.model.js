"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});
const modelo = mongoose.model("Rol", esquema);
exports.default = modelo;
//# sourceMappingURL=rol.model.js.map