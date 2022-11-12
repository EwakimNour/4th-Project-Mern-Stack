const Users_DB_DAL = require(`../DALs/users_DB_DAL`)

const get_All_Users = async () => {
    let AllUsers = await Users_DB_DAL.get_All_Users()
    // console.log(`Users  from mongo db :`)
    // console.log(AllUsers)
    if (AllUsers.length == 0) {
        AllUsers = "There isn't any user"
    }
    return (AllUsers)
}
// get_All_Users()
const get_One_User = async (id) => {
    const yourUser = await Users_DB_DAL.get_One_User(id)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    return (yourUser)
}
// get_One_User("62b5d55c6a0e13e50e9f73e3")
// ObjectId("62b5d55c6a0e13e50e9f73e3")
const create_One_User = async (obj) => {
    const yourUser = await Users_DB_DAL.create_One_User(obj)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    // console.log("1 document inserted")
    return yourUser
}
// create_One_User({ "name": "nour" })
const update_One_User = async (id, obj) => {
    const yourUser = await Users_DB_DAL.update_One_User(id, obj)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    // console.log("1 document updated")
    return yourUser
}
// update_One_User("62b72bc7a854a6c54ce128ef", { "name": "ywakim" })
const delete_One_Users = async (id, obj) => {
    const yourUser = await Users_DB_DAL.delete_One_Users(id, obj)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    console.log("1 document deleted")
    return yourUser
}
// delete_One_Users("62b72bc7a854a6c54ce128ef")
const create_Many_Users = async (objs) => {
    const yourUsers = await Users_DB_DAL.create_Many_Users(objs)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    // console.log("Many document inserted")
    return yourUsers

}
// create_Many_Users([{ "name": "haifa" }, { "name": "reshon" }])
const delete_Many_Users = async (objs) => {
    const yourUsers = await Users_DB_DAL.delete_Many_Users(objs)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    // console.log("Many document deleted")
    return yourUsers
}
const Check_One_User = async (obj) => {
    console.log(obj)
    const yourUser = await Users_DB_DAL.Check_One_User(obj)
    // console.log(`User  from mongo db :`)
    // console.log(yourUser)
    // console.log("1 document check")
    return yourUser
}
// Check_One_User({ "UserName": "ywakim nour", "Password": "Nour" })
module.exports = { get_All_Users, get_One_User, create_One_User, update_One_User, delete_One_Users, create_Many_Users, delete_Many_Users, Check_One_User }