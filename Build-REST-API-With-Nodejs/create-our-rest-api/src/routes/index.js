import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializedDb from '../db'
import restaurant from '../controller/restaurant'
import account from '../controller/account'

let router = express()

// connect to Db
initializedDb(db => {
    // internal middleware
    router.use(middleware({config,db}))
    // api routes v1 (/v1)
    router.use('/restaurant', restaurant({config, db}))
})

export default router
