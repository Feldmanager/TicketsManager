const express = require('express');
const ticketPreformer = require('../BLL/TicketHandler');
const {Permit} = require('commonframework');

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

router.delete('/:ticketId',Permit("Admin", "Makas", "Staff"),async (req, res) =>{
    try{
        let id = req.params.ticketId;
        res.status(200).send(await ticketPreformer.Delete(id));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

router.put('/:ticketId', async (req, res) => {
    let params = {};
    params['TicketId'] = req.params.ticketId;
    if(req.query.statusId) {params['StatusId'] = req.query.statusId;};
    if(req.query.handlerGroupId) {params['HandlerGroupId'] = req.query.handlerGroupId;};
    if(req.query.costumerGroupId) {params['CostumerGroupId'] = req.query.costumerGroupId;};
    if(req.query.roomNumber) {params['RoomNumber'] = req.query.roomNumber;};
    if(req.query.description) {params['Description'] = req.query.description;};
    res.status(200).send(await ticketPreformer.Put(params));
})


// router.post('/:ticketId/Comment',async (req, res) =>{
//     try{
//         let ticketId = req.params.ticketId;
//         let body = req.body;
//         let comment = body.comment;
//         let userName = body.userName;
//         console.log("request params:")
//         console.log(req.params)
//         console.log("params:")
//         console.log(`ticketId = ${ticketId}    comment = ${comment}    userName = ${userName}`)
//         res.status(200).send(await commentPreformer.Insert(ticketId, comment, userName));
//     }
//     catch(err){
//         console.log(err);
//         res.status(400).send(err);
//     }
// })

module.exports = router;