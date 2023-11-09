const { getDuasWithId, getCategoriesDuas, allDua } = require("../middleware/utils/database")

exports.allDuaService = async() => {
    const result = await allDua();
    if(result.length !== 0){
        return result;
    }
}
exports.getDuasByIdService = async(queryParams) => {
    const result = await getDuasWithId(queryParams);
    if(result.length !== 0){
        return result;
    }
}

exports.getCategoriesDuas = async(queryParam) => {
    const result = await getCategoriesDuas(queryParam);
    if(result.length !== 0){
        return result;
    }
}

