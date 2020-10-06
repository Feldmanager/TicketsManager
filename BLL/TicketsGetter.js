// const dbExecuter = require('../DAL/sqlHandler.js');
let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');
const db = new SqlHandler();

let tableName = "Tickets";


const Get= async (params)=>
{
    let query = GetQuery(params);
    console.log(query);
    let results = await db.Execute(query);
    return results.recordset;
}

let GetQuery = (params)=>{
    console.log("start running on fields:")
    console.log(params)
    let query = `EXEC GetTicketsBy`
    Object.keys(params).forEach(key =>{
        console.log(key + " , " + params[key]);
        query += ` @${key} = ${params[key]},`;
    });
    if (query[query.length - 1] != ','){
        return query
    }
    return query.slice(0, query.length -1);
}

module.exports.Get = Get;
