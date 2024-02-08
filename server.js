require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PeopleRouter = require('./controllers/people')


// APP
const app = express();


// MIDDLEWARE
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


// ROUTES
app.use('/people', PeopleRouter);

app.get('/', (req,res) => {
    res.send('hello world')
})



// SERVER LISTENER
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening to port ${PORT}`))