const express = require("express")

const router = express.Router()
const MoviesBL = require("../BLs/movies_Ws_BL")
//localhost:3000/api/Movies
router.route("/").get(async (req, resp) => {
    let AllMovies = await MoviesBL.getAllMovies()
    return resp.json(AllMovies)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMovie = await MoviesBL.getOneMovie(id)
    return res.json(yourMovie)
})

module.exports = router