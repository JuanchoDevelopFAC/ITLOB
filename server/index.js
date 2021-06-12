var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ITLOB_db', {useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conexión a la base de datos satisfactoria');
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            })
        })
        .catch((error) => {
            console.log(error);
        });