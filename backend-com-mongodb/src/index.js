const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const TarefasRotas = require('./routes/TaskRoutes');
server.use('/tarefa', TarefasRotas);

server.listen(3333,()=>{
    console.log('API ONLINE');
});