/* Middleware a nivel de aplicacion */
const middleware1 = (req, res, next) => {
    console.log('Ingreso a Middleware 1');
    req.dato1 = 'un dato'
    next()
 }
 
 
 const middleware2 = (req, res, next) => {
    console.log('Ingreso a Middleware 2');
    req.dato2 = 'otro dato'
    next()
 }
 

 module.exports = {
    middleware1,
    middleware2
 }