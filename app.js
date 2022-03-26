const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middlewere/notFound')
const errorHandlerMiddleware = require('./middlewere/error_handler')
const connectDB = require('./db/connection')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))

//Routes 

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)



const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server in listening to port ${port}..... `))

    } catch (error) {
        console.log(error)
    }
}
start()