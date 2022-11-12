const SubscriptionDB = require(`../DALs/subscriptions_DB_DAL`)
const axios = require(`axios`)
const getAllSubscriptions = async () => {
    const AllSubscriptions = await SubscriptionDB.getAllSubscriptions()
    // console.log(`Subscriptions  from mongo db :`)
    // console.log(AllSubscriptions)
    return (AllSubscriptions)
}
const getOneSubscription = async (id) => {
    const yourSubscription = await SubscriptionDB.getOneSubscription(id)
    // console.log(`Subscription  from mongo db :`)
    // console.log(yourSubscription)
    return (yourSubscription)
}
const createOneSubscription = async (obj) => {
    // console.log(`obj before is :`)
    // console.log(obj)
    const yourSubscription = await SubscriptionDB.createOneSubscription(obj)
    // console.log(`Subscription  from mongo db :`)
    // console.log("1 document inserted")
    return yourSubscription
}
const updateOneSubscription = async (id, obj) => {
    const yourSubscription = await SubscriptionDB.updateOneSubscription(id, obj)
    // console.log(`Subscription  from mongo db :`)
    // console.log(yourSubscription)
    return ("1 document updated")
}
const deleteOneSubscription = async (id, obj) => {
    const yourSubscription = await SubscriptionDB.deleteOneSubscription(id, obj)
    // console.log(`Subscription  from mongo db :`)
    // console.log(yourSubscription)
    return ("1 document deleted")
}
const getOneSubscriptionbymemberId = async (id) => {
    const yourSubscription = await SubscriptionDB.getOneSubscriptionbymemberId(id)
    // console.log(`Subscription  from mongo db :`)
    // console.log(yourSubscription)
    return (yourSubscription)
}
// getOneSubscriptionbymemberId("62bf8a80877f6ad73d755096")
const getSubscriptionsbymovieId = async (id) => {
    const yourSubscriptions = await SubscriptionDB.getSubscriptionsbymovieId(id)
    console.log(`Subscription  from mongo db :`)
    console.log(yourSubscriptions)
    return (yourSubscriptions)
}
const delete_movie_arr_Subscriptions_by_movie_Id = async (id) => {
    let yourSubscriptions = await SubscriptionDB.getSubscriptionsbymovieId(id)
    console.log(`Subscription  from mongo db :`)
    console.log(yourSubscriptions)
    if (yourSubscriptions.length > 0) {
        let subs_updated = yourSubscriptions.map((elem, i) => {
            let movies = elem.Movies.filter(Element => String(Element.movieId) !== id)
            let obj = {
                _id: elem._id,
                MemberId: String(elem.MemberId),
                Movies: movies
            }
            return (obj)

        })
        subs_updated.forEach(element => {
            updateOneSubscription(element._id, element)

        })
        yourSubscriptions = subs_updated
    }
    return (yourSubscriptions)
}
const delete_Subscriptions_by_member_Id = async (id) => {
    let yourSubscriptions = await SubscriptionDB.getOneSubscriptionbymemberId(id)
    console.log(`Subscription  from mongo db :`)
    console.log(yourSubscriptions)
    if (yourSubscriptions) {
        deleteOneSubscription(yourSubscriptions._id)
        yourSubscriptions = "all subscription deleted"
    }
    return "no subs with this member id"
}
module.exports = { getAllSubscriptions, getOneSubscription, createOneSubscription, updateOneSubscription, deleteOneSubscription, getOneSubscriptionbymemberId, getSubscriptionsbymovieId, delete_movie_arr_Subscriptions_by_movie_Id, delete_Subscriptions_by_member_Id }