const express = require('express');
const ticketsGetter = require('../BLL/TicketsGetter');

const router = express.Router();

router.get('/',async (req, res) =>{
    try{
        let params = {}
        if(req.query.ticketId) {params['TicketId'] = req.query.ticketId;};
        if(req.query.handlerGroupId) {params['HandlerGroupId'] = req.query.handlerGroupId;};
        if(req.query.costumerGroupId) {params['CostumerGroupId'] = req.query.costumerGroupId;};
        if(req.query.costumerUserName) {params['CostumerUserName']= req.query.costumerUserName;};
        if(req.query.statusId) {params['StatusId'] = req.query.statusId;};
        if(req.query.roomNumber) {params['RoomNumber'] = req.query.roomNumber;};
        

        res.status(200).send(await ticketsGetter.Get(params));
    }

    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})


module.exports = router;