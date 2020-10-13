const express = require('express');
const ticketPreformer = require('../BLL/TicketHandler');
const {Permit} = require('commonframework');
let { UserInvalidInputError} = require('commonframework');


const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        let params = {};
        let body = req.body;
        params.handlerGroupId = body.handlerGroupId.toString();
        params.costumerGroupId = body.costumerGroupId.toString();
        params.costumerUserName = body.costumerUserId.toString();
        params.description = body.description.toString();
        params.roomNumber = body.roomNumber.toString();
        res.status(200).send(await ticketPreformer.Insert(params));
    }
    catch (err) {
        console.log(err);
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
})

router.delete('/:ticketId',Permit("Admin", "Makas", "Staff"),async (req, res) =>{
    try{
        let params = {};
        params.id = req.params.ticketId;
        res.status(200).send(await ticketPreformer.Delete(params));
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

router.put('/:ticketId', async (req, res) => {
    try
    {
        let params = {};
        params['TicketId'] = req.params.ticketId;
        if(req.query.handlerGroupId) {params['HandlerGroupId'] = req.query.handlerGroupId;};
        if(req.query.costumerGroupId) {params['CostumerGroupId'] = req.query.costumerGroupId;};
        if(req.query.roomNumber) {params['RoomNumber'] = req.query.roomNumber;};
        if(req.query.description) {params['Description'] = req.query.description;};
        if(req.query.statusId) {
            if(req.role == "MaintenancePerson" || req.role == "Admin"){
                params['StatusId'] = req.query.statusId;
            }
            else{
                throw new TypeError("unauthorized to change status")
            }
        }
        res.status(200).send(await ticketPreformer.Put(params));
    }
    catch (err) {
        console.log(err);
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else if(err instanceof TypeError){
            res.status(403).send({errorContent: err.message});
        }else {
            res.status(500).send({ errorContent: err.message });
        }
    }
})

module.exports = router;