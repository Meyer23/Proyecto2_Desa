const  express  = require('express');
const  cors  = require('cors');
const { db } = require('../database/dbconexion.js');


class Server {  
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.rolesPath = '/api/roles';
        this.modulosPath = '/api/modulos';
        this.usuariosPath = '/api/usuarios';
        this.clientesPath = '/api/clientes';
        this.proveedoresPath = '/api/proveedores';
        
        //Conectar a la base de datos
        this.database();

        //Middlewares
        this.middlewares();

        // CORS
        this.app.use(cors());
        
        // Lectura y parseo del body
        this.app.use(express.json());

        //Routes
        this.routes();

        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.rolesPath, require('../routes/roles'));
        this.app.use(this.modulosPath, require('../routes/modulos'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.clientesPath, require('../routes/clientes'));
        this.app.use(this.proveedoresPath, require('../routes/proveedores'));
  
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