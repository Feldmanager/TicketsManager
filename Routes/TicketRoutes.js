const express = require('express');
const ticketPreformer = require('../BLL/TicketHandler');

const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        let body = req.body;
        let handlerGroupId = body.handlerGroupId;
        let costumerGroupId = body.costumerGroupId;
        let costumerUserId = body.costumerUserId;
        let description = body.description;
        let roomNumber = body.roomNumber;
        res.status(200).send(await ticketPreformer.Insert(handlerGroupId, costumerGroupId, costumerUserId, description, roomNumber));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

router.delete('/:ticketId',async (req, res) =>{
    try{
        console.log(req.params);
        let id = req.params.ticketId;
        console.log(id);
        res.status(200).send(await ticketPreformer.Delete(id));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})




module.exports = router;