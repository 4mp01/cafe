
const express = require('express')
const app = express()
const server = require('http').Server(app);
const path = require('path')
require('dotenv/config')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/views', express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({ extended: true }))

const menuRoute = require('./routes/menu')
app.use('/menu', menuRoute)

const ratingRoute = require('./routes/rating')
app.use('/rating', ratingRoute)

const aboutRoute = require('./routes/about')
app.use('/about', aboutRoute)

app.get('/', (req, res) => {
    res.render('index')
})

server.listen(process.env.PORT || 9999, () => {
    console.log("Listening to port: "+process.env.PORT || 9999 )
})