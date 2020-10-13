const express = require('express');
const commentsPreformer = require('../BLL/CommentHandler');
let { UserInvalidInputError} = require('commonframework');


const router = express.Router();


router.get('/:ticketId',async (req, res) =>{
    try{
        let params = {};
        params.ticketId = req.params.ticketId;
        res.status(200).send(await commentsPreformer.Get(params));
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