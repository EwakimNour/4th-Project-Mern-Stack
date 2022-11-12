const express = require("express")
const cors = require('cors')
let members_DB_Router = require("./Routers/members_DB_Router")
let movies_DB_Router = require("./Routers/movies_DB_Router")
let subscriptions_DB_Router = require("./Routers/subscriptions_DB_Router")

const Members_DB_BL = require("./BLs/members_DB_BL")
const Members_Ws_BL = require("./BLs/members_Ws_BL")

const Movies_DB_BL = require("./BLs/movies_DB_BL")
const Movies_Ws_BL = require("./BLs/movies_Ws_BL")

const app = express();
app.use(cors())
app.use(express.json())
// http://localhost:5000/api/members
app.use("/api/members", members_DB_Router)
// http://localhost:5000/api/movies
app.use("/api/movies", movies_DB_Router)
// http://localhost:5000/api/subscriptions
app.use("/api/subscriptions", subscriptions_DB_Router)
console.log("yes it work")

app.listen(5000, () => {
    console.log("server is listening")
})
const data = async () => {
    Movies_DB_BL.deleteManyMovies()
    const movies_ws = await Movies_Ws_BL.getAllMovies()
    // console.log(movies_ws)
    Movies_DB_BL.createManyMovies(movies_ws)
    Members_DB_BL.deleteManyMembers()
    const members_ws = await Members_Ws_BL.getAllMembers()
    // console.log(members_ws)
    Members_DB_BL.createManyMembers(members_ws)
}
// data()

