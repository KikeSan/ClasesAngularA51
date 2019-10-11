import mongoose = require("mongoose")
import configDatabase = require("../config/database.config")

const inicializarBaseDatos = async () => {
	mongoose.Promise = global.Promise

	const promiseConnection =  new Promise((resolve,reject)=>{
		mongoose.connect(configDatabase.connectionString,{
			keepAlive: true,  //mantiena la conexion por un tiempo 
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})
		
		mongoose.connection.on("connected",()=>{
			console.log("Conectado a Mongo!!!!")

			require("../models").Usuario

			resolve()
		})
		
		mongoose.connection.on("error",error=>{
			console.log("Ocurrió un error")
			console.log(error)
			reject(error)
		})
	})
	await promiseConnection
}

export {inicializarBaseDatos}
