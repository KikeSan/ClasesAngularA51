import multer = require("multer")

const upload = () => {
    const opciones:any = {}

    const ops:any = {
        destination(req,file,cb){
            cb(null, "../public/cv")
        },
        filename(req,file,cb){
            cb(null,file.originalname)
        }
    }

    opciones.storage = multer.diskStorage(ops)

    return multer(opciones).single("foto")
}

export {upload}