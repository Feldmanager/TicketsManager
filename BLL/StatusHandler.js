let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');
const db = new SqlHandler();

let GetById = async (statusId)=>
{
    let query = SelectQuery(statusId);
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let GetAllStatus = async ()=>
{
    let query = SelectAllQuery();
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let SelectAllQuery = ()=>
{
    return query = `EXEC GetStatus`;
}
let SelectQuery = (statusId)=>
{
    return query = `EXEC GetStatus @StatusId = ${statusId}`;
}


module.exports.GetById = GetById;
module.exports.GetAllStatus = GetAllStatus;