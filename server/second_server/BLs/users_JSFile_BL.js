const Users_JSFile = require(`../DALs/users_JSFile_DAL`)

const get_All_Users = async () => {
    const { Users: All_Users } = await Users_JSFile.get_All_Users_Data()
    // console.log(`Users  from Json File :`)
    // console.log(All_Users)
    return (All_Users)
}
// get_All_Users()
const get_One_User = async (id) => {
    const { Users: All_Users } = await Users_JSFile.get_All_Users_Data()
    // console.log(`All Users  from Json File :`)
    // console.log(All_Users)
    let Your_user = ""
    const user_index = All_Users.findIndex(user => user.id == id)
    if (user_index == -1) {
        // console.log("there is not user has this id")
        Your_user = "there is not user has this id"
    } else {
        Your_user = All_Users[user_index]
        // console.log(`your User`)
        // console.log(Your_user)
    }
    return Your_user
}
// get_One_User("62b5d55c6a0e13e50e9f73e3")
const create_One_User = obj => {
    Users_JSFile.Post_User_Data(obj)
    return ("1 document created")
}
// create_One_User({ "name": "a" })
const update_One_User = async (id, obj) => {
    const { Users: All_Users } = await Users_JSFile.get_All_Users_Data()
    // console.log(`All Users  from Json File :`)
    // console.log(All_Users)
    let Your_user = ""
    const user_index = All_Users.findIndex(user => user.id == id)
    if (user_index == -1) {
        // console.log("there is not user has this id")
        Your_user = "there is not user has this id"
    } else {
        // console.log(All_Users[user_index])
        // console.log(`User before update`)
        // console.log(All_Users[user_index])
        All_Users[user_index] = obj
        // console.log(`All Users  after update :`)
        // console.log(All_Users)
        Users_JSFile.Post_All_Users_Data(All_Users)
        Your_user = "1 document updated"
    }
    return Your_user
}
// update_One_User("1", { "id": "2", "name": "yoakim nour" })
const delete_One_User = async (id) => {
    const { Users: All_Users } = await Users_JSFile.get_All_Users_Data()
    // console.log(`All Users  from Json File before delete :`)
    // console.log(All_Users)
    let Your_user = ""
    const user_index = All_Users.findIndex(user => user.id == id)
    if (user_index == -1) {
        // console.log("there is not user has this id")
        Your_user = "there is not user has this id"
    } else {
        // console.log(`Users contain ${All_Users.length} objects before delete`)
        All_Users.splice([user_index], 1)
        // console.log(`Users contain ${All_Users.length} objects after object`)
        Users_JSFile.Post_All_Users_Data(All_Users)
        Your_user = "1 document deleted"
    }
    return Your_user
}
// delete_One_User("2")
module.exports = { get_All_Users, get_One_User, create_One_User, update_One_User, delete_One_User }