"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (ftn) => {
    return (rq, rs, nx) => {
        return ftn(rq, rs, nx).catch(error => {
            const err = new Error(error.message);
            err.status = 500;
            nx(err);
            /* console.log(error)
            rq
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status:httpStatus.INTERNAL_SERVER_ERROR,
                    message: error.message
                }) */
        });
    };
};
exports.catchAsync = catchAsync;
const pathNotFound = (req, res, next) => {
    const error = new Error("Ruta no encontrada");
    error.status = 404;
    next(error);
};
exports.pathNotFound = pathNotFound;
//Un middleware con 4 params es para manejo de errores
const generalError = (error, req, res, next) => {
    const entorno = process.env.NODE_ENV;
    if (entorno != "production") {
        return res
            .status(error.status)
            .json({
            status: error.status,
            message: error.message,
            stack: error.stack
        });
    }
    return res
        .status(error.status)
        .json({
        status: error.status,
        message: error.message
    });
};
exports.generalError = generalError;
//# sourceMappingURL=errors.handler.js.map