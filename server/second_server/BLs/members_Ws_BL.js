const Members_Ws_DAL = require(`../DALs/members_Ws_DAL`)

const get_All_members = async () => {
    const { data: All_members } = await Members_Ws_DAL.get_All_members()
    // console.log(`ALL members  from web services :`)
    // console.log(All_members)
    return All_members
}
// get_All_members()

const get_One_member = async (id) => {
    const { data: Yourmember } = await Members_Ws_DAL.get_One_member(id)
    // console.log(`Your member  from web services :`)
    // console.log(Yourmember)
    return Yourmember
}
// get_One_member(1)
// 62bf8a80877f6ad73d75508d
const create_One_member = async (obj) => {
    const { data: Yourmember } = await Members_Ws_DAL.create_One_member(obj)
    // console.log(`Your member  from web services :`)
    // console.log(Yourmember)
    return Yourmember
}
// ObjectId("62b792948f7b4e65e9c34fd3")
// create_One_member(
// {
//     id: Yourmember.id,
//     Name: Yourmember.name,
//     Geners: Yourmember.geners,
//     Image: Yourmember.address.city,
//     Premiered: Yourmember.premiered
// }
// )
const update_One_member = async (id, obj) => {
    const { data: Yourmember } = await Members_Ws_DAL.update_One_member(id, obj)
    // console.log(`Your member  from web services :`)
    // console.log(Yourmember)
    return Yourmember
}

const delete_One_member = async (id) => {
    const { data: Yourmember } = await Members_Ws_DAL.delete_One_member(id)
    // console.log(`Your member  from web services :`)
    // console.log(Yourmember)
    return Yourmember
}
// ObjectId("62b798428f7b4e65e9c350c1")
// delete_One_member("62b798428f7b4e65e9c350c1")
// const get_One_member_by_memberId = async (id) => {
//     const { data: Yourmember } = await Movies_Ws_DAL.get_One_movie_by_memberId(id)
//     console.log(`Your member  from web services :`)
//     console.log(Yourmember)
//     return Yourmember
// }
// getOnememberbymemberId("62b73700016059cf621d137e")

module.exports = { get_All_members, get_One_member, create_One_member, update_One_member, delete_One_member }