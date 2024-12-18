const express = require('express')
const Task = require('../models/taskModel')

const router = express.Router()

// GET all tasks
router.get('/', (req, res) => {
    res.json({msg: 'GET all tasks'})
})

// GET a single task
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single task'})
})

// POST a new task
router.post('/', async (req, res) => {
    const {title, weight} = req.body

    try {
        const task = await Task.create({title, weight})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a task'})
})

// UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a task'})
})


module.exports = router