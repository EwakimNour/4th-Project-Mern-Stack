const axios = require(`axios`)

const url = `https://jsonplaceholder.typicode.com/users`
const getAllMembers = () => {
    return axios.get(url)
}
const getOneMember = (id) => {
    return axios.get(`${url}/${id}`)
}
module.exports = { getAllMembers, getOneMember }