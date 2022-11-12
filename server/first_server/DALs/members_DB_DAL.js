const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Members collection:
            dbo.collection("Members").find({}).toArray(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const getOneMember = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Members collection:
            dbo.collection("Members").findOne({ '_id': ObjectId(id) }, function (err, result) {
                if (err) {
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
const createOneMember = (obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Members").insertOne(obj, function (err, result) {
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
const updateOneMember = (id, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Members").findOneAndUpdate({ '_id': ObjectId(id) }, { $set: obj }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    // console.log("1 document updated");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
const deleteOneMember = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Members").findOneAndDelete({ '_id': ObjectId(id) }, function (err, result) {
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
const createManyMembers = (objs) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Members").insertMany(objs, function (err, result) {
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
const deleteManyMembers = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Members").deleteMany({}, function (err, result) {
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
// obj = { name: "Company Inc", address: "Highway 37" };
// createOneMember("62b45b934b8e03605fd16768")
// id="62b1b2c5333e3494cb626e2b"
// firstid="62b1af2020b90509d51ca3e7"
module.exports = { getAllMembers, getOneMember, createOneMember, updateOneMember, deleteOneMember, createManyMembers, deleteManyMembers }