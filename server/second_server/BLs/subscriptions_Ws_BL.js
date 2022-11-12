const Subscriptions_Ws_DAL = require(`../DALs/subscriptions_Ws_DAL`)
const axios = require(`axios`)
const get_All_Subscriptions = async () => {
    // const { data: All_Subscriptions } = await Subscriptions_Ws_DAL.getAllMovies()
    const { data: All_Subscriptions } = await Subscriptions_Ws_DAL.get_All_Subscriptions()
    // console.log(`ALL Subscriptions  from web services :`)
    // console.log(All_Subscriptions)
    return All_Subscriptions
}
// get_All_Subscriptions()

const get_One_Subscription = async (id) => {
    const { data: YourSubscription } = await Subscriptions_Ws_DAL.get_One_Subscription(id)
    // console.log(`Your Subscription  from web services :`)
    // console.log(YourSubscription)
    return YourSubscription
}
// get_One_Subscription(1)

const create_One_Subscription = async (obj) => {
    const { data: YourSubscription } = await Subscriptions_Ws_DAL.create_One_Subscription(obj)
    // console.log(`Your Subscription  from web services :`)
    // console.log(YourSubscription)
    return YourSubscription
}
// ObjectId("62b792948f7b4e65e9c34fd3")
// create_One_Subscription(
//     {
//         "MemberId": "62b792938f7b4e65e9c34fc7",
//         "Movies": [
//             {
//                 "movieId": "62b792948f7b4e65e9c34fd2",
//                 "date": "25.06.2022"
//             },
//             {
//                 "movieId": "62b792948f7b4e65e9c34fd3",
//                 "date": "26.06.2022"
//             }
//         ]
//     }
// )
const update_One_Subscription = async (id, obj) => {
    const { data: YourSubscription } = await Subscriptions_Ws_DAL.update_One_Subscription(id, obj)
    // console.log(`Your Subscription  from web services :`)
    // console.log(YourSubscription)
    return YourSubscription
}
// update_One_Subscription("62b743feda8c38e419fb54f7",
//     {
//         "MemberId": "62b73700016059cf621d137e",
//         "Movies": [
//             {
//                 "movieId": "62b73fbf5081b35dc319ffe6",
//                 "date": "20.06.2022"
//             },
//             {
//                 "movieId": "62b73fbf5081b35dc319ffe7",
//                 "date": "21.06.2022"
//             }
//         ]
//     })

const delete_One_Subscription = async (id) => {
    const { data: YourSubscription } = await Subscriptions_Ws_DAL.delete_One_Subscription(id)
    // console.log(`Your Subscription  from web services :`)
    // console.log(YourSubscription)
    return YourSubscription
}
// ObjectId("62b798428f7b4e65e9c350c1")
// delete_One_Subscription("62b798428f7b4e65e9c350c1")
const get_One_Subscription_by_memberId = async (id) => {
    const { data: YourSubscription } = await Subscriptions_Ws_DAL.get_One_Subscription_by_memberId(id)
    // console.log(`Your Subscription  from web services :`)
    // console.log(YourSubscription)
    return YourSubscription
}
// getOneSubscriptionbymemberId("62b73700016059cf621d137e")

const get_Subscriptions_by_movieId = async (id) => {
    const { data: YourSubscriptions } = await Subscriptions_Ws_DAL.get_Subscriptions_by_movieId(id)
    // console.log(`Your Subscriptions  from web services :`)
    // console.log(YourSubscriptions)
    return YourSubscriptions
}
const delete_movie_arr_Subscriptions_by_movie_Id = async (id) => {
    const { data: YourSubscriptions } = await Subscriptions_Ws_DAL.delete_movie_arr_Subscriptions_by_movie_Id(id)
    // console.log(`Your Subscriptions  from web services :`)
    // console.log(YourSubscriptions)
    return YourSubscriptions
}
const delete_Subscriptions_by_member_Id = async (id) => {
    const { data: YourSubscriptions } = await Subscriptions_Ws_DAL.delete_Subscriptions_by_member_Id(id)
    // console.log(`Your Subscriptions  from web services :`)
    // console.log(YourSubscriptions)
    return YourSubscriptions
}
module.exports = {
    get_All_Subscriptions,
    get_One_Subscription,
    create_One_Subscription,
    update_One_Subscription,
    delete_One_Subscription,
    get_One_Subscription_by_memberId,
    get_Subscriptions_by_movieId,
    delete_movie_arr_Subscriptions_by_movie_Id,
    delete_Subscriptions_by_member_Id
}