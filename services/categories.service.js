const { getCategories } = require("../middleware/utils/database");
const db = require("../server");

exports.getCategoriesService = async () => {
    const result = await getCategories([]);
    return result;
}