const express = require('express');
const routerTasks = express.Router();

routerTasks.get('/', (req,res) => {
    res.send("Tasks");
})

module.exports = routerTasks;