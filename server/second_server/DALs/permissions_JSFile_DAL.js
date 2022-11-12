const jFile = require(`jsonfile`);

const get_All_Permissions_Data = () => {
    return new Promise((resolve, reject) => {
        jFile.readFile(__dirname + "/../Data/Permissions.json", (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
const Post_All_Permissions_Data = (objs) => {
    let fullData = { "Permissions_User": objs };
    jFile.writeFile(__dirname + "/../Data/Permissions.json", fullData, (err, data) => {
        if (err) {
            reject(err)
        }
        else {
            console.log("Created")
        }
    })
}

const Post_Permission_Data = (obj) => {
    jFile.readFile(__dirname + "/../Data/Permissions.json", (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            let arr = data.Permissions_User
            arr.push(obj)
            let fullData = { "Permissions_User": arr };
            jFile.writeFile(__dirname + "/../Data/Permissions.json", fullData, (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    console.log("Created")
                }
            })
        }
    })
}
// let myobj = {
// name: "ewakim"
// }
// PostUserData(myobj)
module.exports = { get_All_Permissions_Data, Post_All_Permissions_Data, Post_Permission_Data }