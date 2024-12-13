const User = require('../models/user.model')

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body)

        if (!user) { return res.status(404).json({ message: 'User not found' }) }

        const updateUser = await User.findById(id)
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)

        if (!user) { return res.status(404).json({ message: 'User not found' }) }

        const deleteUser = await User.findById(id)
        res.status(200).json("deleted succes")
    } catch (error) {
        res.status(500).json({ message: "deleted succes" })
    }
}

// Route pour télécharger une image
const imageUser = async (req, res) => {
    try {
        // Vérifiez si un fichier a été envoyé
        if (!req.file) {
            return res.status(400).json({ error: 'Aucun fichier envoyé' });
        }

        // Renvoyer le chemin du fichier
        res.status(200).json({
            message: 'Image téléchargée avec succès !',
            filePath: `/uploads/${req.file.filename}`
        });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors du téléchargement' });
    }
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    imageUser
}
