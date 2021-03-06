const express = require('express')
const expressSession = require('express-session')
const cors = require('cors')
const path = require('path');

const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'some secret string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))
  //  (path.resolve(__dirname, 'public'))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const artRoutes = require('./api/art/art.routes')

app.get('/api/setup-session', (req, res) => {
    req.session.connectedAt = Date.now()
    console.log('setup-session:', req.sessionID);
    res.end()
})

app.use('/api/art', artRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


const logger = require('./service/logger.service')


const port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
})
console.log('I am Here!, am I?')