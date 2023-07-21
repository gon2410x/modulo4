const router = require('express').Router()
let timeForClient;

/* Middleware a nivel de Router */
router.use( (req, res, next) => {
    timeForClient = new Date().toISOString();
    next();
});
  

router.get('/ruta1' , (req , res)=>{
    // router code here
    res.status(200).send({
        ruta: req.url,
        date: timeForClient
    });

})


router.get('/ruta2' , (req , res)=>{
    // router code here
    res.status(200).send({
        ruta: req.url,
        date: timeForClient
    });
})

module.exports  = router