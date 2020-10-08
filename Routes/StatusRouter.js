const express = require('express');
const statusGetter = require('../BLL/StatusHandler.js');

const router = express.Router();


router.get('/:statusId',async (req, res) =>{
    try{
        let statusId = req.params.statusId;
        res.status(200).send(await statusGetter.GetById(statusId).recordset);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

router.get('/',async (req, res) =>{
    try{
        res.status(200).send(await statusGetter.GetAllStatus());
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})


module.exports = router;