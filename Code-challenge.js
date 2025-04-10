// Create a simple Express server.
// Add a login route that:
const { match } = require('assert')
const express = require('express')
const jwt = require('jwt')
const app = express()
const port = 3000
const bcrypt = require('bcrypt')

app.get('/', (req, res) => {
    res.send(path.join(__dirname, "/home.html"))
})

app.get('/login', (req, res) => {
    const { email, password } = req.body
    // if I find email and password in database
    // generates jwt and sends back to the client 
    try {
        const matchingUser = db.collection.find({ email, password }) 
        if (!matchingUser) {
            res.send('email or passowrd not found')
        } else {
            const matchingPassword = bcrypt.compare(password, matchingUser.password)
            if (!matchingPassword) {
                return res.status(404).send('incorrect password')
            } else {
                const token = jwt.sign({userId: user._id}, "secret-key", {expiresIn: '1h'})
                res.json({ token })
            }
        }

    } catch(err) {
        console.log(err)
    }


    res.send()
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})



// Accepts a hardcoded email/password (user@example.com, password123)



// If correct, generates a JWT and sends it back to the client.

// Add a protected /notes route that:

// Checks for a JWT in the Authorization header (Bearer token).

// Verifies the token.

// If valid, returns a hardcoded array of notes.

// If invalid/missing, returns a 401 error.

// # 1. Login
// POST /login
// Body: { "email": "user@example.com", "password": "password123" }

// # 2. Use returned JWT:
// GET /notes
// Headers: Authorization: Bearer <your_token>