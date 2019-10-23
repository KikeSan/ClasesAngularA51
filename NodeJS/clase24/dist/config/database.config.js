"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yenv = require('yenv');
const env = yenv();
const connectionString = `mongodb+srv://${env.DB.USER}:${env.DB.PWD}@${env.DB.HOST}/${env.DB.NAME}?retryWrites=true&w=majority`;
exports.connectionString = connectionString;
//# sourceMappingURL=database.config.js.map