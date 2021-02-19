const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = express.Router()

const public = express.static('public')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(cors())
app.use(public)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
