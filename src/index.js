const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const db = require('./config/db')
const router = require("./routes")


// connect to Db
db.connect()

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

// tempalert engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resouces', 'views'))
//  routes init
router(app)

app.listen(port, () => console.log(`listening on ${port}`))