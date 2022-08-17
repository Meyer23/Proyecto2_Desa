const  express  = require('express');
const { cors } = require('cors');
const { db } = require('../database/dbconexion.js');


class Server {  
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.estadosPath = '/api/estados';
        this.rolesPath = '/api/roles';
        
        //Conectar a la base de datos
        this.database();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

        this.app.use(this.estadosPath, require('../routes/estados'));
        this.app.use(this.rolesPath, require('../routes/roles'));
  
    }
    async database(){
        try {
            await db.authenticate();
            console.log('Database is connected.')
        } catch (error) {
            throw new Error(error);
        }
    }

    //Middlewares
    middlewares(){
        
    }

    //Rutas
    routes(){
        
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor escuchando en', this.port);
        })
    }
}

module.exports = Server