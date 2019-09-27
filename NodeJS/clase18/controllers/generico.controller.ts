class GenericoController{
	constructor(private modelo:any){}

	//this.modelo = this.modelo.bind(this)

	listar(req,res){
		res.type("application/json").send({
			name:"Fullstack",
			ruta:req.url,
			modelo:this.modelo
		})
	}

	obtenerUno(req,res){
		res.type("application/json").send({
			name:"Fullstack Detalle",
			ruta:req.url
		})
	}

	insertar(req,res){
		res.status(201).json({
			status:201,
			message:"Usuario insertado"
		})
	}

	actualizar(req,res){
		res.status(201).json({
			status:201,
			message:"Usuario actualizado"
		})
	}

	eliminar(req,res){
		res.status(201).json({
			status:201,
			message:"Usuario eliminado"
		})
	}
}

export default GenericoController