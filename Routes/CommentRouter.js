const express = require('express');
const commentPreformer = require('../BLL/CommentHandler');
let { UserInvalidInputError} = require('commonframework');


const router = express.Router();


router.post('/:ticketId',async (req, res) =>{
    try{
        let params = {};
        let body = req.body;
        params.ticketId = req.params.ticketId;
        params.comment = body.comment;
        params.userName = body.userName;
        res.status(200).send(await commentPreformer.Insert(params));
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