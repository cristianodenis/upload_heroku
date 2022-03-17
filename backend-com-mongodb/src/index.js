const express = require('express');
const cors = require('cors');
const server = express();

const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

const TarefasRotas = require('./routes/TaskRoutes');
server.use('/tarefa', TarefasRotas);

server.listen(port,()=>{
    console.log('API ONLINE ' + port);
    if(process.env.PORT != null){
        process.env.MONGO_URL;
    }
    console.log(process.env);
});