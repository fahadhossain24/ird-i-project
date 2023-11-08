const { getCategories } = require("../middleware/utils/database");

exports.getCategoriesService = async () => {
    const result = await getCategories([]);
    return result;
}

