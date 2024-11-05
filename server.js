require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const animeRoute = require('./routes/anime')

const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI);

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use(morgan('dev'))

app.get("/", (req, res)=>{
  res.render('home.ejs')
})

app.use(animeRoute)

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})