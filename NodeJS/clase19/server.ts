//import express from "express"
import * as http from "http"
import express = require("express");
/* import RouterUsuarios from "./routes/usuarios.route"
import RouterAlumnos from "./routes/alumnos.route" */
import {RouterAlumnos,RouterUsuarios} from "./routes"
import {Request} from "express"
import * as bodyParser from 'body-parser'

let httpServer: http.Server
let app = express()

// comandos node
// ts-node server 			//levanta el servidor

interface RequestApp extends Request{
	estaAutenticado:boolean
}

const inicializar = ():Promise<any> => {
	return new Promise((resolve, reject)=>{
		httpServer = http.createServer(app)

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({extended:false}))

		app.use("/users",(req:RequestApp,res,next)=>{
			req.estaAutenticado= true
			/* res.json({
				status:401,
				message:"Usuario no logueado"
			}) */
			next()
		})

		app.use("/users",(req,res)=>{
			res.json({
				status:409,
				message:"Acceso restringido"
			})
		})

		app.use("/usuarios",RouterUsuarios)
		app.use("/alumnos",RouterAlumnos)
		

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
		.on("listening", ()=>resolve())
		.on("error", err=>reject(err)) 
	})
}
//el async siempre va a un método
const iniciar = async () => {
	try {
		console.log("Iniciando Servidor");
		await inicializar()
		console.log("Servidor Ejecutándose");
	} catch (error) {
		console.log("Ocurrió un error");
		console.log(error);
	}
}

iniciar()


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