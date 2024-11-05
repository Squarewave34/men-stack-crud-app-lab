require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI);

const Anime = require("./models/anime.js");
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use(morgan('dev'))

// ROUTES

app.get("/", (req, res)=>{
  res.render('home.ejs')
})

app.get("/anime", async (req, res) => {
  const allAnime = await Anime.find();
  console.log(allAnime);
  res.render("anime/index.ejs", { anime: allAnime });
});

app.get("/anime/new", (req, res)=>{
  res.render('anime/new.ejs')
})

app.post("/anime", async (req, res) => {
  await Anime.create(req.body);
  res.redirect('/anime');
});

app.get("/anime/:animeId", async (req, res) => {
  const foundAnime = await Anime.findById(req.params.animeId);
  res.render("anime/show.ejs", { anime: foundAnime });
});

app.delete("/anime/:animeId", async (req, res) => {
  await Anime.findByIdAndDelete(req.params.animeId);
  res.redirect("/anime");
});

app.get("/anime/:animeId/edit", async (req, res) => {
  const foundAnime = await Anime.findById(req.params.animeId);
  res.render("anime/edit.ejs", {anime: foundAnime,});
});

app.put("/anime/:animeId", async (req, res) => {
  await Anime.findByIdAndUpdate(req.params.animeId, req.body);
  res.redirect(`/anime/${req.params.animeId}`);
});


// END OF ROUTES

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})