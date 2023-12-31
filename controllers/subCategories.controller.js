const CustomError = require("../utils/customError");
const subCategoriesService = require("../services/subCategories.service");

exports.getSubCategories = async (req, res ,next) => {
    try {
        const id = Number(req.params.id);
        const subCategories = await subCategoriesService.getSubCategoriesService(id);
        if(subCategories.length === 0){
            const err = new CustomError('sub categories not found', 404);
            next(err);
        }
        res.status(200).json({
            status: 'success',
            message: 'Sub categories retrived successfull',
            data: subCategories,
        })
    } catch (error) {
        const err = new CustomError(error.message, 404);
        next(err);
    }
}
