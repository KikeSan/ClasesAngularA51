const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		defaultTo: "Desconocido"
	},
	apellido: String,
	correo: {
		type: String,
		email: true,
		require: true,
		size: 255,
		unique: true,
		lowercase: true
	},
	contrasena:{
		type: String,
		trim: true,
		required: true,
	},
	cv:String,
	roles:[
		{
			type: mongoose.Schema.ObjectId,
			ref:"Rol"
		}
	]
})

function autoPoblar(next){
	this.populate("roles")
	next()
}
//antes que el metodo find llame a algo
esquema.pre("find",autoPoblar)	
esquema.pre("findOne",autoPoblar)

const modelo = mongoose.model("Usuario", esquema)

export default modelo