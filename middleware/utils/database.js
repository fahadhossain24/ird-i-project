// database connection
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./dua_main.sqlite', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('database connection error', err.message);
    } else {
        console.log('database connection successfull');
    }
});


const getCategories = (queryParams) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM category';
        db.all(sql, queryParams, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}


module.exports = {
    db,
    getCategories
}