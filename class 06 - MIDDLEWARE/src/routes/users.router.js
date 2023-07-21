const router = require('express').Router();
const {middleware1, middleware2} = require ('../middleware/middlewares.js');

router.get('/ruta1', middleware1, (req, res) => {
    res.json({
        dato1: req.dato1
    })
 })

router.get('/ruta2', middleware1, middleware2, (req, res) => {
    res.json({
        dato1: req.dato1,
        dato2: req.dato2
    })
 })

 module.exports  = router