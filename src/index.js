const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

//configuraciones
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);


//miderwares
app.use(morgan('dev')); //peticiones al servidor 
app.use(express.urlencoded({ extended: false })); //para leer formularios
app.use(express.json()); //formatos json 
// Configurar cabeceras y cors

//app.use(cors);


//Habilitar cors
app.use(cors());

//rutas 
app.use(require('./routes/index'));
app.use('/API/topic', require('./routes/topic'));


// iniciando el sevidor 
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto  ${app.get('port')}`);
});