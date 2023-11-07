const { getCategories } = require("../middleware/utils/database");
const db = require("../server");

exports.getCategoriesService = async () => {
    try {
        const data = await getCategories([]);
        return data;
    } catch (error) {
        return error.message
    }
}