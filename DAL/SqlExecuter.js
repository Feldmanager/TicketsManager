const sql = require("mssql");

const Execute= (query) =>
{
 
    // config for your database
    var config = {
        user: 'feldmanager',
        password: 'littlecitizen1!',
        server: '10.1.0.117', 
        database: 'feldmanager' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return recordset;
            
        });
    });
};

module.exports = Execute;