"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validador = esquemas => {
    return (req, res, next) => {
        // PARAMETROS
        /* id:Joi.number().min(18).max(50).error(errors => new Error("Sucedió un error")), */
        /* const esquema = Joi.object().keys({
            id:Joi.number().min(18).max(50),
            nivel:Joi.string().regex(/^[a-zA-Z]+[0-9]{3,8}$/)
        }) */
        //const valido = Joi.validate(req.params,esquema) //version 15
        //const valido = esquema.validate(req.params)
        // QUERYS
        /* const esquema = Joi.object().keys({
            nombre: Joi.string().required(),
            titulo: Joi.string(),
            correo: Joi.string().email().required()
        })
    
        const esquemaCabecera = Joi.object().keys({
            Authorization: Joi.string().min(30).regex(/^Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/).required()
        })
    
        const esquemaCuerpo = Joi.object().keys({
            nombre: Joi.string().required(),
            apellidoPaterno: Joi.string().required(),
            apellidoMaterno: Joi.string()
        })
    
        console.log("cabeceras",req.headers); */
        //const valido = esquema.validate(req.query)
        //const valido = esquemaCabecera.validate(req.headers)
        /* const valido = esquemaCuerpo.validate(req.body) */
        // EJERCICIO
        let valido;
        ["params", "querys"].forEach(el => {
            console.log("valido", valido);
            if (esquemas[el] && (!valido || !valido.error)) {
                valido = esquemas[el].validate(req[el]);
            }
        });
        if (valido.error)
            return res.status(422).json(valido.error.details);
        /* const validoParams = esquemas.Params.validate(req.params)
        if(validoParams.error) return res.status(422).json(validoParams.error.detail)
    
    
        const validoQuerys = esquemas.Querys.validate(req.query)
        if(validoQuerys.error) return res.status(422).json(validoQuerys.error.detail) */
        console.log(valido);
        //if(valido.error)return res.status(422).json(valido.error.details) // 422 error cuando los parametros no son validos
        next(); //corre el siguiente middleware en este caso controller.obtenerUno
    };
};
exports.default = validador;
//# sourceMappingURL=validator.js.map