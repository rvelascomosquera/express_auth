const express = require('express')
const router = express.Router()

//controllers
const AuthController = require('./controllers/AuthController')

router.get('/', (req, res)=> (
  res.json({hello: "world"})
));

//Ruta de login y Registro
router.post('/api/signin', AuthController.signIn)
router.post('/api/singup', AuthController.singUp)

module.exports = router;