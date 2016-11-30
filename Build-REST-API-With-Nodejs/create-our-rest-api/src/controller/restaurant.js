import mongoose from 'mongoose'
import { Router } from 'express'
import Restaurant from '../model/restaurant'

export default({config, db}) => {
    let api = Router()
    // '/v1/restaruant/add'
    api.post('/add', (req, reb) => {
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

    return api
}