const mongoose = require('mongoose')

const Roles = ['ROLE_USER', 'ROLE_ADMIN']
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Entrer votre Nom']
    },
    surname: {
        type: String,
        required: [true, 'Entrer votre Prénom']
    },
    email: {
        type: String,
        required: [true, 'Entrer votre Email'],
        unique: true
    },
    Tel: {
        type: Number,
        required: [true, 'Entrer votre Numéro de Téléphone'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Entrer votre mot de passe']
    },

    role: {
        type: Roles,
        required: true,
        default: Roles.ROLE_USER
    },

    adress: {
        type: String,
        required: [true, 'Entrer votre adresse']
    },
    image: {
        type: String,
        required: false
    }
},
    {
        Timestamp: true
    }
);

const User = mongoose.model('User', UserSchema)

module.exports = User