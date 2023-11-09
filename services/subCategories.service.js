const { getSubCategories } = require("../middleware/utils/database");

exports.getSubCategoriesService = async(queryParams) => {
    const result = await getSubCategories(queryParams);
    if(result.length !== 0){
        return result;
    }
}