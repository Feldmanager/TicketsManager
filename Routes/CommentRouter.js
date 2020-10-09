const express = require('express');
const commentPreformer = require('../BLL/CommentHandler');

const router = express.Router();


router.post('/:ticketId',async (req, res) =>{
    try{
        let ticketId = req.params.ticketId;
        let body = req.body;
        let comment = body.comment;
        let userName = body.userName;
        res.status(200).send(await commentPreformer.Insert(ticketId, comment, userName));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;