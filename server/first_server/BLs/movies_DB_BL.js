const MovieDB = require(`../DALs/movies_DB_DAL`)

const getAllMovies = async () => {
    const AllMovies = await MovieDB.getAllMovies()
    // console.log(`Movies  from mongo db :`)
    // console.log(AllMovies)
    return (AllMovies)
}
const getOneMovie = async (id) => {
    const yourMovie = await MovieDB.getOneMovie(id)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    return (yourMovie)
}
const createOneMovie = async (obj) => {
    const yourMovie = await MovieDB.createOneMovie(obj)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    // console.log("1 document inserted")
    return yourMovie

}
const updateOneMovie = async (id, obj) => {
    const yourMovie = await MovieDB.updateOneMovie(id, obj)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    // console.log("1 document updated")
    return yourMovie
}
const deleteOneMovie = async (id, obj) => {
    const yourMovie = await MovieDB.deleteOneMovie(id, obj)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    console.log("1 document deleted")
    return yourMovie
}
const createManyMovies = async (objs) => {
    const yourMovies = await MovieDB.createManyMovies(objs)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    // console.log("Many document inserted")
    return yourMovies

}
const deleteManyMovies = async (objs) => {
    const yourMovies = await MovieDB.deleteManyMovies(objs)
    // console.log(`Movie  from mongo db :`)
    // console.log(yourMovie)
    // console.log("Many document deleted")
    return yourMovies
}
module.exports = { getAllMovies, getOneMovie, createOneMovie, updateOneMovie, deleteOneMovie, createManyMovies, deleteManyMovies }