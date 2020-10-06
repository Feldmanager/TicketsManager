const express = require('express');
const ticketsGetter = require('../BLL/TicketsGetter');

const router = express.Router();

router.get('/',async (req, res) =>{
    // try{
    //     let params = {
    //     TicketId: req.query.ticketId || null,
    //     HandlerGroupId: req.query.handlerGroupId || null,
    //     CostumerGroupId: req.query.costumerGroupId || null,
    //     CostumerUserName: req.query.costumerUserName || null,
    //     StatusId: req.query.statusId || null
    //     } 

    //     res.status(200).send(ticketsGetter.Get(params));
    // }

    try{
        let params = {}
        if(req.query.ticketId) {params['TicketId'] = req.query.ticketId;};
        if(req.query.handlerGroupId) {params['HandlerGroupId'] = req.query.handlerGroupId;};
        if(req.query.costumerGroupId) {params['CostumerGroupId'] = req.query.costumerGroupId;};
        if(req.query.costumerUserName) {params['CostumerUserName']= req.query.costumerUserName;};
        if(req.query.statusId) {params['StatusId'] = req.query.statusId;};

        res.status(200).send(await ticketsGetter.Get(params));
    }

    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

 //@TicketId int = null, @CostumerGroupId int = null, @CostumerUserName varchar(50)= null, @HandlerGroupId int = null, @StatusId int = null


module.exports = router;