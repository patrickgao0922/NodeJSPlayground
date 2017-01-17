import mongoose from 'mongoose'
import {Router} from 'express'
import Account from '../model/accountå'
import bodyParser from 'body-parser'
import config from '../config'

import  {generateAccessToken, respond, authenticate} from '../middleware/authmiddleware'


export default ({config, db}) => {
    let api = Router()

    return api
}