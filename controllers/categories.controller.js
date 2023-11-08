const CustomError = require("../middleware/utils/customError");
const categoriesServices = require("../services/categories.service");

exports.getCategories = async (req, res, next) => {
    try {
        const categories = await categoriesServices.getCategoriesService([]);
        if(categories.length === 0){
            const err = new CustomError('categories not found', 404);
            next(err);
        }
        res.status(200).json({
            status: 'success',
            message: 'categories retrieved successfull',
            data: categories,
        })
    } catch (error) {
        const err = new CustomError(error.message, 404);
        next(err);
    }
}
