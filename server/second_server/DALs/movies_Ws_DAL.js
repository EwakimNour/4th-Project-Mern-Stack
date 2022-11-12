const axios = require(`axios`)

const url = `http://localhost:5000/api/movies`
const get_All_movies = () => { return axios.get(url) }
const get_One_movie = id => { return axios.get(`${url}/${id}`) }
const create_One_movie = obj => { return axios.post(url, obj) }
const update_One_movie = (id, obj) => { return axios.put(`${url}/${id}`, obj) }
const delete_One_movie = id => { return axios.delete(`${url}/${id}`) }
module.exports = { get_All_movies, create_One_movie, get_One_movie, update_One_movie, delete_One_movie }