const axios = require(`axios`)

const url = `https://api.tvmaze.com/shows`
const getAllMovies = () => {
    return axios.get(url)
}
const getOneMovie = (id) => {
    return axios.get(`${url}/${id}`)
}
module.exports = { getAllMovies, getOneMovie }