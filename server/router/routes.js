const express = require("express")
const router = express.Router()
const workouts = require('../models/workout')



//Get all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'Get all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: 'Get a single workout'})
})

//Post a single workout
router.post('/', async (req, res) =>{
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.mssg})
    }
})

//Deleted a single workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'Deleted a workout'})
})

router.patch('/:id', (req, res) =>{
    res.json({mssg: 'Patched a workout'})
})


module.exports = router