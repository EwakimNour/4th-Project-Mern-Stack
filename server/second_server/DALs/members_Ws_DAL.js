const axios = require(`axios`)

const url = `http://localhost:5000/api/members`
const get_All_members = () => { return axios.get(url) }
const get_One_member = id => { return axios.get(`${url}/${id}`) }
const create_One_member = obj => { return axios.post(url, obj) }
const update_One_member = (id, obj) => { return axios.put(`${url}/${id}`, obj) }
const delete_One_member = id => { return axios.delete(`${url}/${id}`) }
module.exports = { get_All_members, create_One_member, get_One_member, update_One_member, delete_One_member }