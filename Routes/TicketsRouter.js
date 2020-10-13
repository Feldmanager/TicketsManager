const express = require('express');
const ticketsGetter = require('../BLL/TicketsGetter');
let { UserInvalidInputError} = require('commonframework');


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

    catch (err) {
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
})


module.exports = router;