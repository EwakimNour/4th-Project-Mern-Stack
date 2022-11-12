const MembersWsDAL = require(`../DALs/members_Ws_DAL`)

const getAllMembers = async () => {
    const { data: AllMembers } = await MembersWsDAL.getAllMembers()
    // console.log(`ALL Members  from web services :`)
    // console.log(AllMembers)
    // return AllMembers
    const Members = AllMembers.map(user => {
        // console.log("id is:", user.id)
        const obj = {
            id: user.id,
            Name: user.name,
            Email: user.email,
            City: user.address.city
        }
        return obj
    })
    // console.log(`ALL Members  from web services :`)
    // console.log(Members)
    return Members
}
// getAllMembers()

const getOneMember = async (id) => {
    const { data: YourMember } = await MembersWsDAL.getOneMember(id)
    // console.log(`YourMember  from web services :`)
    // console.log(YourMember)
    return YourMember
}
// getOneMember(1)

module.exports = { getAllMembers, getOneMember }