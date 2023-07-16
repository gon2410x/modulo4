const express = require('express');
const routerUsers = express.Router();

routerUsers.get('/', (req,res) => {
    res.send("Users");
})

module.exports = routerUsers;