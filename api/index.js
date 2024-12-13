const express = require('express')
const mongoose = require('mongoose')
const app = express()
const usersRoute = require('./routes/user.route')

app.use('/uploads', express.static('uploads'));


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.send('hello world')
})

// routes
app.use('/api/user', usersRoute)


mongoose.connect('')
    .then(() => {
        console.log('database is connected')
        app.listen(3001, () => {
            console.log('connexion au port 3000')
        })
    })
    .catch((error) => {
        console.log('failed connexion')
        console.error('Failed to connect to the database:', error);
    })
