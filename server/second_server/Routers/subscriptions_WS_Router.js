const express = require("express")

const router = express.Router()
const Subscriptions_Ws_BL = require("../BLs/subscriptions_Ws_BL")
//localhost:3000/api/Movies
router.route("/").get(async (req, resp) => {
    let All_Subscriptions = await Subscriptions_Ws_BL.get_All_Subscriptions()
    console.log(All_Subscriptions)
    return resp.json(All_Subscriptions)
}).post(async (req, resp) => {
    let obj = req.body
    let your_Subscription = await Subscriptions_Ws_BL.create_One_Subscription(obj)
    return resp.json(your_Subscription)
})

router.route("/:id").get(async function (req, resp) {
    let id = req.params.id
    let your_Subscription = await Subscriptions_Ws_BL.get_One_Subscription(id)
    return resp.json(your_Subscription)
}).put(async function (req, resp) {
    let id = req.params.id
    let obj = req.body
    let your_Subscription = await Subscriptions_Ws_BL.update_One_Subscription(id, obj)
    return resp.json(your_Subscription)
}).delete(async function (req, resp) {
    let id = req.params.id
    let your_Subscription = await Subscriptions_Ws_BL.delete_One_Subscription(id)
    return resp.json(your_Subscription)
})

router.route("/getbymemberid/:id").get(async function (req, resp) {
    let id = req.params.id
    let your_Subscription = await Subscriptions_Ws_BL.get_One_Subscription_by_memberId(id)
    return resp.json(your_Subscription)
})

router.route("/getbymovieid/:id").get(async function (req, resp) {
    let id = req.params.id
    let your_Subscriptions = await Subscriptions_Ws_BL.get_Subscriptions_by_movieId(id)
    return resp.json(your_Subscriptions)
})

router.route("/deletemoviebymovieid/:id").delete(async function (req, resp) {
    let id = req.params.id
    let your_Subscriptions = await Subscriptions_Ws_BL.delete_movie_arr_Subscriptions_by_movie_Id(id)
    return resp.json(your_Subscriptions)
})

router.route("/deletesubbymemberid/:id").delete(async function (req, resp) {
    let id = req.params.id
    let your_Subscriptions = await Subscriptions_Ws_BL.delete_Subscriptions_by_member_Id(id)
    return resp.json(your_Subscriptions)
})

module.exports = router