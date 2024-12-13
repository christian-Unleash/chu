const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const { getUsers, getUser, createUser, updateUser, deleteUser, imageUser } = require('../controllers/user.controllers')

const multer = require('multer');
const path = require('path');

// Configuration Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/upload', upload.single('image'), imageUser)


module.exports = router

