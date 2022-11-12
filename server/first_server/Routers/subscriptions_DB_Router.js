const express = require("express")

const router = express.Router()
const SubscriptionsBL = require("../BLs/subscriptions_DB_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllSubscriptions = await SubscriptionsBL.getAllSubscriptions()
    console.log(AllSubscriptions)
    return resp.json(AllSubscriptions)
}).post(async function (req, res) {
    let obj = req.body
    let yourSubscription = await SubscriptionsBL.createOneSubscription(obj)
    return res.json(yourSubscription)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await SubscriptionsBL.getOneSubscription(id)
    return res.json(yourMember)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let yourSubscription = await SubscriptionsBL.updateOneSubscription(id, obj)
    return res.json(yourSubscription)
}).delete(async function (req, res) {
    let id = req.params.id
    let yourSubscription = await SubscriptionsBL.deleteOneSubscription(id)
    return res.json(yourSubscription)
})
router.route("/getbymemberid/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await SubscriptionsBL.getOneSubscriptionbymemberId(id)
    return res.json(yourMember)
})
router.route("/getbymovieid/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await SubscriptionsBL.getSubscriptionsbymovieId(id)
    return res.json(yourMember)
})
router.route("/deletemoviebymovieid/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await SubscriptionsBL.delete_movie_arr_Subscriptions_by_movie_Id(id)
    return res.json(yourMember)
})
router.route("/deletesubbymemberid/:id").delete(async function (req, res) {
    let id = req.params.id
    let yourMember = await SubscriptionsBL.delete_Subscriptions_by_member_Id(id)
    return res.json(yourMember)
})
module.exports = router