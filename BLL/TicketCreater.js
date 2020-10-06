const dbExecuter = require('../DAL/sqlHandler.js');
const db = new dbExecuter();

let tableName = "Tickets";


const Insert=(handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, phoneNumber)=>
{
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    // let hours = date_ob.getHours();

    // let minutes = date_ob.getMinutes();

    // let seconds = date_ob.getSeconds();

    // let dateOpen = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    let openedDate = year + "-" + month + "-" + date;
    console.log(openedDate);
    let query = CreationQuery(handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, openedDate, phoneNumber)
    console.log("executing query: " + query);
    return db.Execute(query);
}

let CreationQuery = (handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, openedDate, phoneNumber)=>{
    return `EXEC InsertTicket @HandlerGroupId = ${handlerGroupId}, @CostumerGroupId = ${costumerGroupId}, @CostumerUserName  = ${costumerUserName}, @Description = ${description}, @RoomNumber = ${roomNumber}, @OpenedDate = '${openedDate}', @PhoneNumber = ${phoneNumber};`;
}

module.exports.Insert = Insert;
