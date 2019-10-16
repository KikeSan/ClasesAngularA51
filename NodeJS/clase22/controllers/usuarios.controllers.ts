import GenericoController from "./generico.controller";
import {Usuario} from '../models'
import httpStatus = require('http-status-codes')
import bcrypt = require('bcrypt')
import { crearToken } from "../services/token.service";

class Controller extends GenericoController{
	constructor(){
		super(Usuario)
	}

	async login(req,res){
		const data = req.body

		const usuario:any = await Usuario.findOne({correo:data.correo.trim().toLowerCase()})

		if(usuario){
			const coincidencia = await bcrypt.compare(data.contrasena,usuario.contrasena)
			if(coincidencia){
				const token = crearToken(usuario._id,usuario.roles)
				res
					.status(httpStatus.OK)
					.json({
						status: httpStatus.OK,
						results:{
							token
						}
					})
			}else{
				res
					.status(httpStatus.UNAUTHORIZED)
					.json({
						status: httpStatus.UNAUTHORIZED,
						messahe: "Email and/or password invalid"
					})
			}
		}else{
			res
				.status(httpStatus.UNAUTHORIZED)
				.json({
					status: httpStatus.UNAUTHORIZED,
					message: "User is not logged"
				})
		}
	}

	async insertar(req,res){
		const data = req.body

		//cifrado de la contrseña
		data.contrasena = await bcrypt.hash(data.contrasena,10)

		const usuario = new Usuario(data)
		await usuario.save()

		res.status(httpStatus.CREATED).json({
			status:httpStatus.CREATED,
			message:"Usuario insertado!"
		})
	}

}

export default Controller