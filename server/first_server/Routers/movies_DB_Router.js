const express = require("express")

const router = express.Router()
const MoviesBL = require("../BLs/movies_DB_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllMovies = await MoviesBL.getAllMovies()
    return resp.json(AllMovies)
}).post(async function (req, res) {
    let obj = req.body
    let yourMovie = await MoviesBL.createOneMovie(obj)
    return res.json(yourMovie)
})
router.route("/createMany").post(async function (req, res) {
    let objs = req.body
    let yourMovies = await MoviesBL.createManyMovies(objs)
    return res.json(yourMovies)
})
router.route("/deleteMany").delete(async function (req, res) {
    let objs = req.body
    let yourMovies = await MoviesBL.deleteManyMovies(objs)
    return res.json(yourMovies)
})
router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMovie = await MoviesBL.getOneMovie(id)
    return res.json(yourMovie)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let yourMovie = await MoviesBL.updateOneMovie(id, obj)
    return res.json(yourMovie)
}).delete(async function (req, res) {
    let id = req.params.id
    let yourMovie = await MoviesBL.deleteOneMovie(id)
    return res.json(yourMovie)
})
module.exports = router