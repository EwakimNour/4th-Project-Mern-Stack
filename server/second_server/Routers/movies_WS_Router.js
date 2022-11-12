const express = require("express")

const router = express.Router()
const Movies_Ws_BL = require("../BLs/movies_Ws_BL")
//localhost:5001/api/Movies
router.route("/").get(async (req, resp) => {
    let All_movies = await Movies_Ws_BL.get_All_movies()
    return resp.json(All_movies)
}).post(async (req, resp) => {
    let obj = req.body
    let your_movie = await Movies_Ws_BL.create_One_movie(obj)
    return resp.json(your_movie)
})

router.route("/:id").get(async function (req, resp) {
    let id = req.params.id
    console.log(id)
    let your_movie = await Movies_Ws_BL.get_One_movie(id)
    console.log(your_movie)
    return resp.json(your_movie)
}).put(async function (req, resp) {
    let id = req.params.id
    let obj = req.body
    let your_movie = await Movies_Ws_BL.update_One_movie(id, obj)
    return resp.json(your_movie)
}).delete(async function (req, resp) {
    let id = req.params.id
    let your_movie = await Movies_Ws_BL.delete_One_movie(id)
    return resp.json(your_movie)
})

// router.route("/getbymemberid/:id").get(async function (req, resp) {
//     let id = req.params.id
//     let your_Subscription = await Movies_Ws_BL.get_One_Subscription_by_memberId(id)
//     return resp.json(your_Subscription)
// })
module.exports = router