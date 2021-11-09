const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one user
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

// Create new user
router.post('/', async (req, res) => {
    const user = new User({
        user: req.body.user,
        email: req.body.email,
        age: req.body.age
    })
    if (req.body.user === '' || req.body.email === '' || req.body.age === '') {
        res.status(400).json({ message: 'EMPTY_VALUE' })
    } else {
        try {
            const newUser = await user.save()
            res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

})

// Update one user
router.put('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.age != null) {
        res.user.age = req.body.age
    }
    if (req.body.dateLogUp != null) {
        res.user.dateLogUp = req.body.dateLogUp
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }

})

// Delete one user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "Deleted User" })
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user === null) {
            return res.status(404).json({ message: "Cannot find the User" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}

module.exports = router