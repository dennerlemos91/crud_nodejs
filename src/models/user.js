const mongoose = require('../database/database');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    cep: {
        type: String
    },
    banco: {
        type: String
    },
    agencia: {
        type: Number
    },
    conta: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;