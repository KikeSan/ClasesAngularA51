import express = require("express")
import {ControllerAlumnos} from "../controllers"

const Router = express.Router()
const controller = new ControllerAlumnos()

Router.get("/",controller.listar)
Router.get("/detalle/:id",controller.obtenerUno)
Router.post("/",controller.insertar)
Router.put("/",controller.actualizar)
Router.delete("/",controller.eliminar)

export default Router