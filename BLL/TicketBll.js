const dbExecuter = require('../DAL/SqlExecuter.js');

let tableName = "Tickets";


const Insert = (handlerGroupId, costumerGroupId, costumerUserName, description, roomNumber, phoneNumber ) =>{
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let hours = date_ob.getHours();

    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let dateOpen = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    
    return dbExecuter(`INSERT INTO ${tableName} ( HandlerGroupId, CostumerGroupId, CostumerUserName, HandlerUserName, Description, RoomNumber, OpenedDate, StatusId, PhoneNumber)
                VALUES (${handlerGroupId}, ${costumerGroupId}, ${costumerUserName}, NULL, ${description}, ${roomNumber}, ${dateOpen}, 1, ${phoneNumber})`);
}

exports.Insert = Insert;
