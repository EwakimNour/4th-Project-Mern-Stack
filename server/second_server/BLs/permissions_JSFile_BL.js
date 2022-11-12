const Permissions_JSFile = require(`../DALs/permissions_JSFile_DAL`)

const get_All_Permissions = async () => {
    const { Permissions_User: All_Permissions } = await Permissions_JSFile.get_All_Permissions_Data()
    const per = await Permissions_JSFile.get_All_Permissions_Data()
    // console.log(per.Permissions_User)
    // console.log(`Permissions  from Json File :`)
    // console.log(All_Permissions)
    return (All_Permissions)
}
// get_All_Permissions()
const get_One_Permission = async (id) => {
    const { Permissions_User: All_Permissions } = await Permissions_JSFile.get_All_Permissions_Data()
    // console.log(`All Permissions  from Json File :`)
    // console.log(All_Permissions)
    let Your_Permission = ""
    const Permission_index = All_Permissions.findIndex(Permission => Permission.id == id)
    if (Permission_index == -1) {
        console.log("there is not user has this id")
        Your_Permission = "there is not user has this id"
    } else {
        Your_Permission = All_Permissions[Permission_index]
        // console.log(`your Permission :`)
        // console.log(Your_Permission)
    }
    return Your_Permission
}
// get_One_Permission("2")
const create_One_Permission = obj => {
    Permissions_JSFile.Post_Permission_Data(obj)
    return ("1 document created")
}
// create_One_Permission({ "name": "a" })
const update_One_Permission = async (id, obj) => {
    const { Permissions_User: All_Permissions } = await Permissions_JSFile.get_All_Permissions_Data()
    console.log(`All Permissions  from Json File :`)
    console.log(All_Permissions)
    let Your_Permission = ""
    const Permission_index = All_Permissions.findIndex(permission => permission.id == id)
    if (Permission_index == -1) {
        console.log("there is not Permission has this id")
        Your_Permission = "there is not Permission has this id"
    } else {
        // console.log(All_Permissions[Permission_index])
        // console.log(`Permission before update`)
        // console.log(All_Permissions[Permission_index])
        All_Permissions[Permission_index] = obj
        // console.log(`All Permissions  after update :`)
        // console.log(All_Permissions)
        Permissions_JSFile.Post_All_Permissions_Data(All_Permissions)
        Your_Permission = "1 document updated"
    }
    return Your_Permission
}
// update_One_Permission("1", {
//     "id": "1",
//     "Permissions": [
//         "View Subscriptions",
//         "Create Subscriptions",
//         "Delete Subscriptions",
//         "View Movies",
//         "Create Movies",
//         "Delete Movies"
//     ]
// })
const delete_One_Permission = async (id) => {
    const { Permissions_User: All_Permissions } = await Permissions_JSFile.get_All_Permissions_Data()
    // console.log(`All Permissions  from Json File before delete :`)
    // console.log(All_Permissions)
    let Your_Permission = ""
    const Permission_index = All_Permissions.findIndex(Permission => Permission.id == id)
    if (Permission_index == -1) {
        console.log("there is not Permission has this id")
        Your_Permission = "there is not Permission has this id"
    } else {
        // console.log(`Permissions contain ${All_Permissions.length} objects before delete`)
        All_Permissions.splice([Permission_index], 1)
        // console.log(`Permissions contain ${All_Permissions.length} objects after object`)
        Permissions_JSFile.Post_All_Permissions_Data(All_Permissions)
        Your_Permission = "1 document deleted"
    }
    // 
    return Your_Permission
}
// delete_One_Permission("2")
module.exports = { get_All_Permissions, get_One_Permission, create_One_Permission, update_One_Permission, delete_One_Permission }