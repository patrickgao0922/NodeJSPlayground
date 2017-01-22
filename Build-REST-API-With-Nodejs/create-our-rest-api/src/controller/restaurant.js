import mongoose from 'mongoose'
import { Router } from 'express'
import Restaurant from '../model/restaurant'


export default({config, db}) => {
    let api = Router()

    // CRUD - Create Read Update Delete


    // '/v1/restaruant/add' - Create
    api.post('/add', (req, res) => {
        let newRest = new Restaurant()
        newRest.name = req.body.name

        // Use mongoose to work with rest api
        newRest.save(err => {
            if (err) {
                res.send(err)
            }
            res.json({message: 'Restaurant saved sucessfully'})
        })
    })



    //  '/v1/restaurant/' - read
    api.get('/', (req, res) => {
        Restaurant.find({}, (err, restaurants) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurants)
        })

    })

    // '/v1/restaurant/:id' - Read 1
    api.get('/:id', (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurant)
        })
    })

    return api
}
