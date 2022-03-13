const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TarefaEsquema = new Schema({
    //required igual a campo obrigatorio
    macaddress:{type: String, required: true},
    type:{type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when:{type: Date, required: true},
    done:{type: Boolean, default: false},
    created:{type: Date, default: Date.now()}
});

module.exports = mongoose.model('Tarefa',TarefaEsquema);