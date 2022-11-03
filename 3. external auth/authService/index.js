const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {

    try {
        console.log(req.headers)
        const { authorization } = req.headers
        if (!authorization) throw new Error('Missing Authorization header')
        const jwt = authorization.replace("Bearer ", "")
        const isValidJwt = dummyValidateJwt(jwt)
        if (!isValidJwt) throw new Error('Invalid jwt')


        console.log(`[SUCCESS] jwt=${jwt}`)
        res.status(200)
        res.end()

    } catch (err) {
        console.log(`[ERROR]: ${err.toString()}`)
        res.status(401)
        res.end('Unauthorized')
    }

    function dummyValidateJwt(jwt) {
        if (jwt) {
            return true
        } else {
            return false
        }
    }
})

app.listen(port, () => console.log(`Auth service listening on port ${port}!`))