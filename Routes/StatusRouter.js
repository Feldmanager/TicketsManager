const express = require('express');
const statusGetter = require('../BLL/StatusHandler.js');
let { UserInvalidInputError} = require('commonframework');


const router = express.Router();


router.get('/:statusId',async (req, res) =>{
    try{
        let params = {};
        params.statusId = req.params.statusId;
        res.status(200).send(await statusGetter.GetById(params));
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

router.get('/',async (req, res) =>{
    try{
        res.status(200).send(await statusGetter.GetAllStatus());
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