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
//import express from "express"
const http = require("http");
const express = require("express");
/* import RouterUsuarios from "./routes/usuarios.route"
import RouterAlumnos from "./routes/alumnos.route" */
const routes_1 = require("./routes");
let httpServer;
let app = express();
const inicializar = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.use("/users", (req, res, next) => {
            req.estaAutenticado = true;
            /* res.json({
                status:401,
                message:"Usuario no logueado"
            }) */
            next();
        });
        app.use("/users", (req, res) => {
            res.json({
                status: 409,
                message: "Acceso restringido"
            });
        });
        app.use("/usuarios", routes_1.RouterUsuarios);
        app.use("/alumnos", routes_1.RouterAlumnos);
        /* httpServer = http.createServer((req,res)=>{
            console.log("Llego una peticion");
            res.writeHead(200,{"content-type":"text/html"})
            res.write("<h1>Hola, que tal</h1>")
            res.write("<br>Todo ok por casa")
            res.write("<br>La ruta es "+req.url)
            res.write("<br>Método usado "+req.method)
            if(req.url=="/usuarios" && req.method=="GET"){
                res.write("<br>Lista de Usuarios")
            }
            res.end("<p>Por favor abre la puerta</p>")
        }) */
        //el método end() tiene que estar al final ya que detiene la ejecución
        httpServer.listen(3000)
            .on("listening", () => resolve())
            .on("error", err => reject(err));
    });
};
//el async siempre va a un método
const iniciar = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Iniciando Servidor");
        yield inicializar();
        console.log("Servidor Ejecutándose");
    }
    catch (error) {
        console.log("Ocurrió un error");
        console.log(error);
    }
});
iniciar();
/* httpServer = http.createServer((req,res)=>{
    console.log("Llego una peticion");
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Hola, que tal</h1>")
    res.write("<br>Todo ok por casa")
    res.write("<br>La ruta es "+req.url)
    res.end("<p>Por favor abre la puerta</p>")
})

httpServer.listen(3000)
.on("Listening", ()=>console.log("Servidor ejecutandose"))
.on("Error", err=>console.log(err)) */ 
//# sourceMappingURL=server.js.map