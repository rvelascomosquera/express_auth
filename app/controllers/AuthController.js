const {user} = require ('../models/index');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const authConfig = require('../../config/auth')

module.exports = {
  
  //login
  signIn(req, res){
    let {email, password} = req.body

    //buscar usuario 
    user.findOne({
      where:{
        email:email
      }
    }).then(user => {
      if (!user) {
        res.status(404).json({msg: "Usuario con este correo no encontrado"});
      } else {
        if (bcrypt.compareSync(password, user.password)){

          //creamos el token
          let token = jwt.sign({user: user}, authConfig.secret, {
            expiresIn: authConfig.expires
          });

          res.json ({
            user:user,
            token: token
          })
        } else {
          //
          res.status(401).json({msg: "contraseña incorrecta"})
        }
      }
    })

  },

  //registro 
  singUp(req, res){

    // incriptar password con libreria bcrypt
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))

    // crear un usuario
    user.create({
      name: req.body.name,
      email: req.body.email,
      password: password
      // creamos un token
    }).then(user => {
      let token = jwt.sign({user:user}, authConfig.secret, {expiresIn: authConfig.expires});
      res.json ({ user: user, token: token })

    }).catch(err => {
      res.status(500).json(err);
    })


  }
}