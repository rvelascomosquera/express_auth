const express = require('express');
const app = express();
const {sequelize} = require('./models/index')

//settings 
const PORT = process.env.PORT || 4000;

//Midedlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./routes'))

app.listen(PORT, function(){
  console.log(`server port: http://localhost:${PORT}`)

  sequelize.authenticate().then(()=> {
    console.log('Conexion con la base de datos')
  })
});