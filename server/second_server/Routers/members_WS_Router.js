const express = require("express")

const router = express.Router()
const Members_Ws_BL = require("../BLs/members_Ws_BL")
//localhost:3000/api/Members
router.route("/").get(async (req, resp) => {
    let All_members = await Members_Ws_BL.get_All_members()
    return resp.json(All_members)
}).post(async (req, resp) => {
    let obj = req.body
    let your_member = await Members_Ws_BL.create_One_member(obj)
    return resp.json(your_member)
})

router.route("/:id").get(async function (req, resp) {
    let id = req.params.id
    let your_member = await Members_Ws_BL.get_One_member(id)
    return resp.json(your_member)
}).put(async function (req, resp) {
    let id = req.params.id
    let obj = req.body
    let your_member = await Members_Ws_BL.update_One_member(id, obj)
    return resp.json(your_member)
}).delete(async function (req, resp) {
    let id = req.params.id
    let your_member = await Members_Ws_BL.delete_One_member(id)
    return resp.json(your_member)
})

module.exports = router