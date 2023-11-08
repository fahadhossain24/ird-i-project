const { getCategories } = require("../middleware/utils/database");

exports.getCategoriesService = async (queryParams) => {
    const result = await getCategories(queryParams);
    return result;
}

