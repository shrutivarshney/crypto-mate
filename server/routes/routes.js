const express = require("express");
const router = express.Router();
const userSchemaCopy = require('../models/signUpModel')

router.post()('/Register',(request,response)=>{
                    const signedUpUser = new userSchemaCopy({
                        fullName:request.body.fullName,
                        username:request.body.username,
                        email:request.body.email,
                        password:request.body.password
                    })
                    signedUpUser.save()
                    .then(data => {
                        response.json(data)
                    })
                    .catch(error => {
                        response.json(error)
                    })
    })

module.exports = router