const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the products collection:
            dbo.collection("Movies").find({}).toArray(function (err, result) {
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
const getOneMovie = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the products collection:
            dbo.collection("Movies").findOne({ '_id': ObjectId(id) }, function (err, result) {
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
const createOneMovie = (obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Movies").insertOne(obj, function (err, result) {
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
const updateOneMovie = (id, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Movies").findOneAndUpdate({ '_id': ObjectId(id) }, { $set: obj }, function (err, result) {
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
const deleteOneMovie = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Movies").findOneAndDelete({ '_id': ObjectId(id) }, function (err, result) {
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
const createManyMovies = (objs) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            dbo.collection("Movies").insertMany(objs, function (err, result) {
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
const deleteManyMovies = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Movies").deleteMany({}, function (err, result) {
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
// getOneMovie("62b45a7992c49f5c25ac2322")
// id="62b1b2c5333e3494cb626e2b""62b1ac0120b90509d51ca27a"
// firstid="62b1ac0120b90509d51ca27a"
// getAllProducts()
module.exports = { getAllMovies, getOneMovie, createOneMovie, updateOneMovie, deleteOneMovie, createManyMovies, deleteManyMovies }