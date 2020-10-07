let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');
const db = new SqlHandler();

let tableName = "Tickets";


const Insert= async (handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber)=>
{
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let openedDate = year + "-" + month + "-" + date;
    console.log(openedDate);
    let query = CreationQuery(handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, openedDate)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, openedDate)=>{
    return `EXEC InsertTicket @HandlerGroupId = ${handlerGroupId}, @CostumerGroupId = ${costumerGroupId}, @CostumerUserName  = ${costumerUserName}, @Description = ${description}, @RoomNumber = ${roomNumber}, @OpenedDate = '${openedDate}';`;
}

let Delete = async (ticketId)=>
{
    let query = DeleteQuery(ticketId);
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let DeleteQuery = (ticketId)=>
{
    return `EXEC DeleteTicketById @TicketId = ${ticketId}`;
}

module.exports.Insert = Insert;
module.exports.Delete = Delete;
