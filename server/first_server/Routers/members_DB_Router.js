const express = require("express")

const router = express.Router()
const MembersBL = require("../BLs/members_DB_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllMembers = await MembersBL.getAllMembers()
    return resp.json(AllMembers)
}).post(async function (req, res) {
    let obj = req.body
    let yourMember = await MembersBL.createOneMember(obj)
    return res.json(yourMember)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await MembersBL.getOneMember(id)
    return res.json(yourMember)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let yourMember = await MembersBL.updateOneMember(id, obj)
    return res.json(yourMember)
}).delete(async function (req, res) {
    let id = req.params.id
    let yourMember = await MembersBL.deleteOneMember(id)
    return res.json(yourMember)
})

module.exports = router