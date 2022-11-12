const express = require("express")

const router = express.Router()
const Users_JSFile_BL = require("../BLs/users_JSFile_BL")
//localhost:3000/api/Products
router.route("/").get(async (req, resp) => {
    let AllUsers = await Users_JSFile_BL.get_All_Users()
    return resp.json(AllUsers)
}).post(async function (req, res) {
    let obj = req.body
    let yourUser = Users_JSFile_BL.create_One_User(obj)
    return res.json(yourUser)
})

router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let yourUser = await Users_JSFile_BL.get_One_User(id)
    return res.json(yourUser)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let yourUser = await Users_JSFile_BL.update_One_User(id, obj)
    return res.json(yourUser)
}).delete(async function (req, res) {
    let id = req.params.id
    let yourUser = await Users_JSFile_BL.delete_One_User(id)
    return res.json(yourUser)
})

module.exports = router