const express = require("express")
const cors = require('cors')

let permissions_JSFile_Router = require("./Routers/permissions_JSFile_Router")
let users_JSFile_Router = require("./Routers/users_JSFile_Router")
let users_DB_Router = require("./Routers/users_DB_Router")
let subscriptions_WS_Router = require("./Routers/subscriptions_WS_Router")
let movies_WS_Router = require("./Routers/movies_WS_Router")
let members_WS_Router = require("./Routers/members_WS_Router")

const app = express();
app.use(cors())
app.use(express.json())

//http://localhost:5001/api/permissions
app.use("/api/permissions", permissions_JSFile_Router)
//http://localhost:5001/api/usersJSF
app.use("/api/usersJSF", users_JSFile_Router)
//http://localhost:5001/api/usersDB
app.use("/api/usersDB", users_DB_Router)
//http://localhost:5001/api/subscriptionsWS
app.use("/api/subscriptionsWS", subscriptions_WS_Router)
//http://localhost:5001/api/moviesWS
app.use("/api/moviesWS", movies_WS_Router)
//http://localhost:5001/api/membersWS
app.use("/api/membersWS", members_WS_Router)
console.log("yes it work")

app.listen(5001, () => {
    console.log("server is listening")
})

