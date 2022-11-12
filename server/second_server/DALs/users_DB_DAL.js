const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const get_All_Users = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log(err)
            };
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the products collection:
            dbo.collection("Users").find({}).toArray(function (err, result) {
                if (err) {
                    console.log(err)
                    // reject(err)
                } else {
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const get_One_User = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Users collection:
            dbo.collection("Users").findOne({ '_id': ObjectId(id) }, function (err, result) {
                if (err) {
                    // console.log(err)
                    reject(err)
                } else {
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const create_One_User = (obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Users").insertOne(obj, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.log("1 document inserted");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const update_One_User = (id, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Users").findOneAndUpdate({ '_id': ObjectId(id) }, { $set: obj }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.log("1 document updated");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const delete_One_Users = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Users").findOneAndDelete({ '_id': ObjectId(id) }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.log("1 document deleted");
                    console.log(result)
                    resolve(result)
                }
                db.close();
            });
        })
    })
}
const create_Many_Users = (objs) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Users").insertMany(objs, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    // console.log("1 document inserted");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const delete_Many_Users = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Users").deleteMany({}, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    // console.log("1 document deleted");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        })
    })
}
const Check_One_User = (obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Users collection:
            dbo.collection("Users").findOne(obj, function (err, result) {
                if (err) {
                    // console.log(err)
                    reject(result)
                } else {
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
// obj = { name: "Company Inc", address: "Highway 37" };
// getOneUser("62b45a7992c49f5c25ac2322")
// id="62b1b2c5333e3494cb626e2b""62b1ac0120b90509d51ca27a"
// firstid="62b1ac0120b90509d51ca27a"
// getAllProducts()
module.exports = { get_All_Users, get_One_User, create_One_User, update_One_User, delete_One_Users, create_Many_Users, delete_Many_Users, Check_One_User }