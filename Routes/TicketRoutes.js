const express = require('express');
const ticketsPreformer = require('../BLL/TicketBll');

const router = express.Router();


router.post('/',(req, res) =>{
    try{
        let body = req.body;
        let handlerGroupId = body.handlerGroupId;
        let costumerGroupId = body.costumerGroupId;
        let costumerUserId = body.costumerUserId;
        let description = body.description;
        let roomNumber = body.roomNumber;
        let phoneNumber = body.phoneNumber;
        res.status(200).send(ticketsPreformer.Insert(handlerGroupId, costumerGroupId, costumerUserId, description, roomNumber, phoneNumber));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})



module.exports = router;