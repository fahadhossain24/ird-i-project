const CustomError = require("../middleware/utils/customError");
const duasServices = require("../services/duas.service");

exports.getDuas = async (req, res, next) => {
    try {
        const duas = await duasServices.getDuasService([]);
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