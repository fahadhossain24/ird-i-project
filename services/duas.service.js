const { getDuas } = require("../middleware/utils/database")

exports.getDuasService = async(queryParams) => {
    const result = await getDuas(queryParams);
    return result;
}

