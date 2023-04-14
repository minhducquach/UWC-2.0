import express from 'express'
import cookieParser from 'cookie-parser'
import jwt, { verify } from 'jsonwebtoken'

const authenticator = (req, res, next) => {
    try {
        const token = req.cookies.token
        var result = jwt.verify(token, process.env.JWT_SECRET)
        if (result) {
            next()
        }
    } catch {
        res.redirect('/login')
    }
}

export default authenticator