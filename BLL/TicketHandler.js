let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let openedDate = year + "-" + month + "-" + date;
    let query = CreationQuery(params.handlerGroupId, params.costumerGroupId, params.costumerUserName, params.description, params.roomNumber, openedDate)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, openedDate) =>{
    return `EXEC InsertTicket @HandlerGroupId = ${handlerGroupId}, @CostumerGroupId = ${costumerGroupId}, @CostumerUserName  = '${costumerUserName}', @Description = '${description}', @RoomNumber = '${roomNumber}', @OpenedDate = '${openedDate}';`;
}

let Delete = async (params)=>
{
    Validator(params);
    let query = DeleteQuery(params.ticketId);
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let DeleteQuery = (ticketId)=>
{
    return `EXEC DeleteTicketById @TicketId = ${ticketId}`;
}

let Put = async  (params) =>{
    Validator(params);
    let query = PutQuery(params);
    console.log(query);
    return await db.Execute(query);
}

let PutQuery = (params) =>{
    let query = 'EXEC ChangeTicket';
    Object.keys(params).forEach(key =>{
        // console.log(key + " , " + params[key]);
        query += ` @${key} = '${params[key]}',`;
    });
    if (query[query.length - 1] != ','){
        return query
    }
    return query.slice(0, query.length -1);
}

module.exports.Insert = Insert;
module.exports.Delete = Delete;
module.exports.Put = Put;
