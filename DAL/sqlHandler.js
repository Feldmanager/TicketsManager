var sql = require("mssql");

class SqlHandler {
    constructor() {
        this.config = {
            user: 'feldmanager',
            password: 'littlecitizen1!',
            server: '10.1.0.117',
            database: 'feldmanager'
        };
    }

    async Execute(query) {
        let result;
        let pool = await sql.connect(this.config)
        let request = pool.request();
        await request.query(query)
            .then((recordset) => {
                result = recordset;

            });
        console.log(result);
        return result;
    }
}

module.exports = SqlHandler;