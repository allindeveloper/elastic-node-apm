const express = require('express');
var apm = require('elastic-apm-node');
const {  validateUserCreate } = require('../models/user');
const constants = require('../Constants');

const router = express.Router();


/**
 * @description /api/User/Register
 */
router.post("/Register", async function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    const { error } = validateUserCreate({ email, password });
    if (error){
      var err = new Error({ message: error.details[0].message })
      apm.captureError(err) // At This Point you send the error to apm
      res.status(400).json({ message: error.details[0].message });

    } else{
      res.status(constants.OK).json({ message: "ok" });
    }
    

});


module.exports = router; 