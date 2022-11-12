const jFile = require(`jsonfile`);
const mongoose = require('mongoose');
const get_All_Users_Data = () => {
    return new Promise((resolve, reject) => {
        jFile.readFile(__dirname + "/../Data/Users.json", (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
const Post_All_Users_Data = (objs) => {
    let fullData = { "Users": objs };
    jFile.writeFile(__dirname + "/../Data/Users.json", fullData, (err, data) => {
        if (err) {
            reject(err)
        }
        else {
            console.log("Created")
        }
    })
}

const Post_User_Data = (obj) => {
    jFile.readFile(__dirname + "/../Data/Users.json", (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            let arr = data.Users
            arr.push(obj)
            let fullData = { "Users": arr };
            jFile.writeFile(__dirname + "/../Data/Users.json", fullData, (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    // console.log("Created")
                    // console.log(data)
                }
            })
        }
    })
}
// let myobj = {
// name: "ewakim"
// }
// PostUserData(myobj)
module.exports = { get_All_Users_Data, Post_All_Users_Data, Post_User_Data }