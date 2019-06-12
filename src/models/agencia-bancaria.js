const mongoose = require('../database/database');

const AgenciaBancariaSchema = new mongoose.Schema({
    banco: {
        type: String,
        required: true
    },
    agencia: {
        type: Number
    },
    endereco: {
        type: String
    },
});

const AgenciaBancaria = mongoose.model('AgenciaBancaria', AgenciaBancariaSchema);

module.exports = AgenciaBancaria;