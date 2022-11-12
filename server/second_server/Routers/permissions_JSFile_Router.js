const express = require("express")

const router = express.Router()
const Permissions_JSFile_BL = require("../BLs/permissions_JSFile_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllPermissions = await Permissions_JSFile_BL.get_All_Permissions()
    return resp.json(AllPermissions)
}).post(async function (req, res) {
    let obj = req.body
    let yourPermission = Permissions_JSFile_BL.create_One_Permission(obj)
    return res.json(yourPermission)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourPermission = await Permissions_JSFile_BL.get_One_Permission(id)
    return res.json(yourPermission)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let yourPermission = await Permissions_JSFile_BL.update_One_Permission(id, obj)
    return res.json(yourPermission)
}).delete(async function (req, res) {
    let id = req.params.id
    let yourPermission = await Permissions_JSFile_BL.delete_One_Permission(id)
    return res.json(yourPermission)
})

module.exports = router