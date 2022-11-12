const MemberDB = require(`../DALs/members_DB_DAL`)

const getAllMembers = async () => {
    const AllMembers = await MemberDB.getAllMembers()
    // console.log(`Members  from mongo db :`)
    // console.log(AllMembers)
    return (AllMembers)
}
// getAllMembers()
const getOneMember = async (id) => {
    const yourMember = await MemberDB.getOneMember(id)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    return (yourMember)
}
// getOneMember("62bf8a80877f6ad73d75508d")
const createOneMember = async (obj) => {
    const yourMember = await MemberDB.createOneMember(obj)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    console.log("1 document inserted")
    return yourMember
}
const updateOneMember = async (id, obj) => {
    const yourMember = await MemberDB.updateOneMember(id, obj)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    console.log("1 document updated")
    return yourMember
}
const deleteOneMember = async (id, obj) => {
    const yourMember = await MemberDB.deleteOneMember(id, obj)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    console.log("1 document deleted")
    return yourMember
}
const createManyMembers = async (objs) => {
    const yourMembers = await MemberDB.createManyMembers(objs)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    // console.log("Many document inserted")
    return yourMembers

}
const deleteManyMembers = async (objs) => {
    const yourMembers = await MemberDB.deleteManyMembers(objs)
    // console.log(`Member  from mongo db :`)
    // console.log(yourMember)
    // console.log("Many document deleted")
    return yourMembers
}
module.exports = { getAllMembers, getOneMember, createOneMember, updateOneMember, deleteOneMember, createManyMembers, deleteManyMembers }