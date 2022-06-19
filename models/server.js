const express = require('express')
var cors = require('cors')

class Server{
    constructor(){
        this.app=express();

        this.port=process.env.PORT;
        
        //Middlewares
        this.middleswares();

        //Rutas        
        this.routes();
        
    }

    middleswares(){
        //Enable CORS, all request
        this.app.use(cors());

        //JSON
        this.app.use(express.json());
        //Direcctorio público
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en ',this.port);
        })
    }

}


module.exports = Server;