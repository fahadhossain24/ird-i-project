// database connection
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./dua_main.sqlite', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('database connection error', err.message);
    } else {
        console.log('database connection successfull');
    }
});

// get categories
const getCategories = (queryParams) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM category';
        db.all(sql, queryParams, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

//get subCategories
const getSubCategories = (queryParams) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM sub_category where cat_id = ?";
        db.all(sql, [queryParams], (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
   
}

// get all dua
const allDua = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dua";
        db.all(sql, [], (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

// get duas by subcategory Id
const getDuasWithId = (queryParams) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dua where subcat_id = ?";
        db.all(sql, [queryParams], (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

// get dua by category
const getCategoriesDuas = (queryParam) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dua where cat_id = ?";
        db.all(sql, [queryParam], (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    db,
    getCategories,
    getSubCategories,
    getDuasWithId,
    getCategoriesDuas,
    allDua,
}