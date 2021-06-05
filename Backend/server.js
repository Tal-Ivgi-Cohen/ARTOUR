const express = require('express')
const expressSession = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

// const cookieParser = require('cookie-parser');
const app = express()
const http = require('http').createServer(app)



const artService = require('./api/art/art.service')
// const userService = require('./service/userService')


// const logger = require('./service/logger.service.js')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    // logger.info('Server is running on port: ' + port)
    console.log('Server is running on port: ' + port);
})
console.log('I am Here!, am I?')

// app.listen(port,
//     () => console.log('Server listening on port', port)
//     )
    // const corses = {
    //     origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
    // }
    
    // Config Express Application
    // app.use(express.static('public'))
    // app.use(bodyParser.json())
    // app.use(express.json())
    // app.use(cors(corses))
// app.use(cookieParser());
    // app.use(session({
 const session = expressSession({
    secret: 'some secret string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
 })

 // Express App Config
app.use(express.json())
app.use(session)


app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const artRoutes = require('./api/art/art.routes')

// app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
app.use('/api/art', artRoutes)


// זה מנתב את הכניסה לעמוד הבית לקובץ אינדקסאיצטיאמאל צריך לייבא אותו לפבליק קודם כמו בהירוקו 
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
