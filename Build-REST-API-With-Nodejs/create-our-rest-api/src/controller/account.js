import mongoose from 'mongoose'
import {Router} from 'express'
import Account from '../model/account'
import bodyParser from 'body-parser'
import config from '../config'

import  {generateAccessToken, respond, authenticate} from '../middleware/authmiddleware'


export default ({config, db}) => {
    let api = Router()

    // '/v1/acccount'
    api.post('/register',(req, res) => {
        Account.register(new Account({
            username:req.body.email,
            password:req.body.password,
            function(err, account) {
                if (err) {
                    res.send(err)
                }
                passport.authenticate(
                    'local', {
                        session:false
                    }
                ) (req, res,()=>{
                    res.status(200).send('Successful created new account')
                })
            }
        }))
    })

    // 'v1/account/login'
    api.post('/login', passport.authenticate(
        'local', {
            session:false,
            scope: []
        }
    ),generateAccessToken, respond)
    
    // 'v1/account/logout'
    api.get('/logout', authenticate, (req, res) =>{
        res.logout()
        res.status(200).send('Successful logged out')
    })

    api.get('me', authenticate, (req, res) => {
        res.status(200).json(req.user)
    })
    return api
}