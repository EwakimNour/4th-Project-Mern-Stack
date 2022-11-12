const express = require("express")

const router = express.Router()
const MembersBL = require("../BLs/members_Ws_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllMembers = await MembersBL.getAllMembers()
    return resp.json(AllMembers)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourMember = await MembersBL.getOneMember(id)
    return res.json(yourMember)
})

module.exports = router