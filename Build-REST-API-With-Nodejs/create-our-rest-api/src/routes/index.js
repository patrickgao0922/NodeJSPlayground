import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializedDb from '../Db'

let router = express()

// connect to Db
initializedDb(db => {
    // internal middleware
    router.use(middleware({config,db}))
    // api routes v1 (/v1)

})

export default router