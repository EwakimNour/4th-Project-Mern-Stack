const axios = require(`axios`)

const url = `http://localhost:5000/api/subscriptions`
const get_All_Subscriptions = () => { return axios.get(url) }
const get_One_Subscription = id => { return axios.get(`${url}/${id}`) }
const create_One_Subscription = obj => { return axios.post(url, obj) }
const update_One_Subscription = (id, obj) => { return axios.put(`${url}/${id}`, obj) }
const delete_One_Subscription = id => { return axios.delete(`${url}/${id}`) }
const get_One_Subscription_by_memberId = id => { return axios.get(`${url}/getbymemberid/${id}`) }
const get_Subscriptions_by_movieId = id => { return axios.get(`${url}/getbymovieid/${id}`) }
const delete_movie_arr_Subscriptions_by_movie_Id = id => { return axios.get(`${url}/deletemoviebymovieid/${id}`) }
const delete_Subscriptions_by_member_Id = id => { return axios.delete(`${url}/deletesubbymemberid/${id}`) }
module.exports = {
    get_All_Subscriptions,
    create_One_Subscription,
    get_One_Subscription,
    update_One_Subscription,
    delete_One_Subscription,
    get_One_Subscription_by_memberId,
    get_Subscriptions_by_movieId,
    delete_movie_arr_Subscriptions_by_movie_Id,
    delete_Subscriptions_by_member_Id
}