let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');
const db = new SqlHandler();


const Insert= async (ticketId, comment, userName)=>
{
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let commentDate = year + "-" + month + "-" + date;
    let query = CreationQuery(ticketId, commentDate, comment, userName)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (ticketId, commentDate, comment, userName)=>{
    return `EXEC InsertComment @TicketId = ${ticketId}, @CommentDate = '${commentDate}', @Comment= '${comment}', @UserName='${userName}';`;
}

const Get= async (ticketId)=>
{
    let query = GetQuery(ticketId)
    console.log("executing query: " + query);
    let results = await db.Execute(query);
    return results.recordset;
}

let GetQuery = (ticketId)=>{
    return `EXEC GetComments @TicketId = ${ticketId};`;
}




module.exports.Insert = Insert;
module.exports.Get = Get;
