const Anime = require("../models/anime")

const newAnime = (req, res) => {
  res.render('anime/new.ejs')
}

const index = async(req, res)=>{
  const allAnime = await Anime.find();
  res.render("anime/index.ejs", { anime: allAnime });
}

const create = async (req, res) => {
  await Anime.create(req.body);
  res.redirect('/anime');
}

const show = async(req, res)=>{
  const id=req.params.id
  const anime = await Anime.findById(id);
  res.render("anime/show.ejs", {anime});
}

const deleteAnime = async (req, res)=>{
  const id=req.params.id
  await Anime.findByIdAndDelete(id);
  res.redirect("/anime");
}

const edit = async(req, res)=>{
    const id=req.params.id
    const anime = await Anime.findById(id);
    res.render("anime/edit.ejs", {anime});
}

const update = async (req, res) => {
    const id = req.params.id
    await Anime.findByIdAndUpdate(id, req.body);
    res.redirect(`/anime/${id}`);
}

module.exports = {
    new: newAnime,
    create,
    index,
    show,
    delete: deleteAnime,
    edit,
    update
}