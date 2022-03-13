const express = require('express');
const cors = require('cors');
const server = express();

const port = PROCESS.env.PORT || 3333;

server.use(cors());
server.use(express.json());

const TarefasRotas = require('./routes/TaskRoutes');
server.use('/tarefa', TarefasRotas);

server.listen(port,()=>{
    console.log('API ONLINE ' + port);
});