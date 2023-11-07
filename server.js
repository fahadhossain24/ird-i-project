const app = require('./app');
const port = process.env.PORT || 7000;
const database = require('./middleware/utils/database');

database.db

app.listen(port, () => {
    console.log('server runnning at port', port)
})
