const express = require('express');
const ticketsPreformer = requie('../BLL/TicketBll');
const app = express();

app.post('/Ticket',(req, res) =>{
    try{
        let body = req.body;
        let handlerGroupId = body.handlerGroupId;
        let costumerUserId = body.costumerUserId;
        let description = body.description;
        let roomNumber = body.roomNumber;
        let phoneNumber = body.phoneNumber;
        res.status(200).send(ticketsPreformer.insert(handlerGroupId, costumerUserId, description, roomNumber, phoneNumber));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})