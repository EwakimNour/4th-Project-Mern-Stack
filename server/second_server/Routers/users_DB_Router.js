const express = require("express")

const router = express.Router()
const Users_DB_BL = require("../BLs/users_DB_BL")
//localhost:3000/api/Users
router.route("/").get(async (req, resp) => {
    let All_Users = await Users_DB_BL.get_All_Users()
    return resp.json(All_Users)
}).post(async function (req, res) {
    let obj = req.body
    let your_User = await Users_DB_BL.create_One_User(obj)
    return res.json(your_User)
})
router.route("/createMany").post(async function (req, res) {
    let objs = req.body
    let your_User = await Users_DB_BL.create_Many_Users(objs)
    return res.json(your_User)
})
router.route("/deleteMany").delete(async function (req, res) {
    let objs = req.body
    let your_User = await Users_DB_BL.delete_Many_Users(objs)
    return res.json(your_User)
})
router.route("/checkuser").post(async function (req, res) {
    let obj = req.body
    let your_User = await Users_DB_BL.Check_One_User(obj)
    return res.json(your_User)
})
router.route("/:id").get(async function (req, res) {
    let id = req.params.id
    let your_User = await Users_DB_BL.get_One_User(id)
    return res.json(your_User)
}).put(async function (req, res) {
    let id = req.params.id
    let obj = req.body
    let your_User = await Users_DB_BL.update_One_User(id, obj)
    return res.json(your_User)
}).delete(async function (req, res) {
    let id = req.params.id
    let your_User = await Users_DB_BL.delete_One_Users(id)
    return res.json(your_User)
})

module.exports = router