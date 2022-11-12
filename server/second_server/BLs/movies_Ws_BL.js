const Movies_Ws_DAL = require(`../DALs/movies_Ws_DAL`)

const get_All_movies = async () => {
    // const { data: All_Subscriptions } = await movies_Ws_DAL.getAllMovies()
    const { data: All_movies } = await Movies_Ws_DAL.get_All_movies()
    // console.log(`ALL movies  from web services :`)
    // console.log(All_movies)
    return All_movies
}
// get_All_Subscriptions()

const get_One_movie = async (id) => {
    const { data: Yourmovie } = await Movies_Ws_DAL.get_One_movie(id)
    // console.log(`Your movie  from web services :`)
    // console.log(Yourmovie)
    return Yourmovie
}
// get_One_movie(1)

const create_One_movie = async (obj) => {
    const { data: Yourmovie } = await Movies_Ws_DAL.create_One_movie(obj)
    // console.log(`Your movie  from web services :`)
    // console.log(Yourmovie)
    return Yourmovie
}
// ObjectId("62b792948f7b4e65e9c34fd3")
// create_One_movie(
// {
//     id: Yourmovie.id,
//     Name: Yourmovie.name,
//     Geners: Yourmovie.geners,
//     Image: Yourmovie.address.city,
//     Premiered: Yourmovie.premiered
// }
// )
const update_One_movie = async (id, obj) => {
    const { data: Yourmovie } = await Movies_Ws_DAL.update_One_movie(id, obj)
    // console.log(`Your movie  from web services :`)
    // console.log(Yourmovie)
    return Yourmovie
}
// update_One_movie("62b743feda8c38e419fb54f7",
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

const delete_One_movie = async (id) => {
    const { data: Yourmovie } = await Movies_Ws_DAL.delete_One_movie(id)
    // console.log(`Your movie  from web services :`)
    // console.log(Yourmovie)
    return Yourmovie
}
// ObjectId("62b798428f7b4e65e9c350c1")
// delete_One_movie("62b798428f7b4e65e9c350c1")
// const get_One_movie_by_memberId = async (id) => {
//     const { data: Yourmovie } = await Movies_Ws_DAL.get_One_movie_by_memberId(id)
//     console.log(`Your movie  from web services :`)
//     console.log(Yourmovie)
//     return Yourmovie
// }
// getOnemoviebymemberId("62b73700016059cf621d137e")

module.exports = { get_All_movies, get_One_movie, create_One_movie, update_One_movie, delete_One_movie }