import express from 'express'
import 'express-async-errors'
import path from 'path'
import cors from 'cors'
import './database/connection'
import routes from './routes'
import errorHandler from './errors/handlers'


const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs)
}))
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)