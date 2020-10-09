const express = require('express');
const commentsPreformer = require('../BLL/CommentHandler');

const router = express.Router();


router.get('/:ticketId',async (req, res) =>{
    try{
        let ticketId = req.params.ticketId;
        res.status(200).send(await commentsPreformer.Get(ticketId));
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;