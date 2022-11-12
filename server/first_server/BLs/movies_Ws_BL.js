const MembersWsDAL = require(`../DALs/movies_Ws_DAL`)

const getAllMovies = async () => {
    const { data: AllMovies } = await MembersWsDAL.getAllMovies()
    // console.log(`ALL Members  from web services :`)
    // console.log(AllMovies)
    // return AllMovies
    const Movies = AllMovies.map(movie => {
        const obj = {
            Name: movie.name,
            Geners: movie.genres,
            Image: movie.image.medium,
            Premiered: movie.premiered
        }
        return obj
    })
    // console.log(`ALL Movies  from web services :`)
    // console.log(Movies)
    return Movies
}
// getAllMovies()

const getOneMovie = async (id) => {
    const { data: YourMovie } = await MoviesWsDAL.getOneMovie(id)
    // console.log(`YourMovie  from web services :`)
    // console.log(YourMovie)
    return YourMovie
}
// getOneMovie(1)

module.exports = { getAllMovies, getOneMovie }