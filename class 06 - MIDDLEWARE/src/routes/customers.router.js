const router = require('express').Router()


router.get('/ruta1', (req, res, next) => {
    try {
        throw new Error('1');
    } catch (err) {
      next(err);
    }
});
router.get('/ruta2', (req, res, next) => {
    try {
        throw new Error('2');
    } catch (err) {
      next(err);
    }
});




/* Middleware de manejo de errores - cuatro parametros */
router.use(function handleErrors (err, req, res, next) {
    let messageError;
    switch (err.message) {
        case '1':
            messageError = 'There was an error getting the customers - ruta1';
            break;
        case '2':
            messageError = 'There was an error getting the customers - ruta2';
            break;
    }
    console.error(err);
    res.status(500).send({
        errorTitle: 'Something broke!',
        errorMessage: messageError
    });
});
  

module.exports  = router 