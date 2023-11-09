const CustomError = require("../middleware/utils/customError");
const duasServices = require("../services/duas.service");

exports.allDua = async (req, res, next) => {
    try {
        const duas = await duasServices.allDuaService();
        if(duas.length === 0){
            const err = new CustomError('Duas not found by Id', 404);
            next(err);
        }
        res.status(200).json({
            status: 'success',
            message: 'Duas retrive successfull',
            data: duas,
        })
    } catch (error) {
        const err = new CustomError(error.message, 404);
        next(err);
    }
}
exports.getDuasById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const duas = await duasServices.getDuasByIdService(id);
        if(duas.length === 0){
            const err = new CustomError('Duas not found by Id', 404);
            next(err);
        }
        res.status(200).json({
            status: 'success',
            message: 'Duas retrive successfull',
            data: duas,
        })
    } catch (error) {
        const err = new CustomError(error.message, 404);
        next(err);
    }
}

exports.getCategoriesDuas = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const duas = await duasServices.getCategoriesDuas(id);
        if(duas.length === 0){
            const err = new CustomError('Duas not found', 404);
            next(err);
        }
        res.status(200).json({
            status: 'success',
            message: 'Duas retrive successfull',
            data: duas,
        })
    } catch (error) {
        const err = new CustomError(error.message, 404);
        next(err);
    }
}