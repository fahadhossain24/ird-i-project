const { getSubCategories } = require("../middleware/utils/database");

exports.getSubCategoriesService = async() => {
    const result = await getSubCategories([]);
    return result;
}