const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the products collection:
            dbo.collection("Subscriptions").find({}).toArray(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.log(result)
                    resolve(result)
                }
                db.close();
            });
        });
    })
}
// getAllSubscriptions()
const getOneSubscription = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Subscriptions collection:
            dbo.collection("Subscriptions").findOne({ '_id': ObjectId(id) }, function (err, result) {
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
const createOneSubscription = (obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            let memberberid = ObjectId(obj.MemberId)
            let movies = obj.Movies.map(movie => {
                return (
                    {
                        movieId: ObjectId(movie.movieId),
                        Premiered: movie.Premiered
                    }
                )
            })
            let fixedObj = {
                ...obj,
                MemberId: ObjectId(obj.MemberId),
                Movies: movies
            }
            dbo.collection("Subscriptions").insertOne(fixedObj, function (err, result) {
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
const updateOneSubscription = (id, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            let memberberid = ObjectId(obj.MemberId)
            let movies = obj.Movies.map(movie => {
                return (
                    {
                        movieId: ObjectId(movie.movieId),
                        Premiered: movie.Premiered
                    }
                )
            })
            let fixedObj = {
                ...obj,
                MemberId: ObjectId(obj.MemberId),
                Movies: movies
            }
            dbo.collection("Subscriptions").findOneAndUpdate({ '_id': ObjectId(id) }, { $set: fixedObj }, function (err, result) {
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
const deleteOneSubscription = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("project4_nodeDB");
            dbo.collection("Subscriptions").findOneAndDelete({ '_id': ObjectId(id) }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.log("1 document deleted");
                    // console.log(result)
                    resolve(result)
                }
                db.close();
            });
        })
    })
}
const getOneSubscriptionbymemberId = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Subscriptions collection:
            dbo.collection("Subscriptions").findOne({ 'MemberId': ObjectId(id) }, function (err, result) {
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
const getSubscriptionsbymovieId = (id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project4_nodeDB");
            // Find the first document in the Subscriptions collection:
            dbo.collection("Subscriptions").find({ "Movies.movieId": ObjectId(id) }).toArray(function (err, result) {
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
// getSubscriptionsbymovieId('62b792948f7b4e65e9c34fd2')
// obj = { name: "Company Inc", address: "Highway 37" };
// getOneSubscription("62b45a7992c49f5c25ac2322")
// id="62b1b2c5333e3494cb626e2b""62b1ac0120b90509d51ca27a"
// firstid="62b1ac0120b90509d51ca27a"
// getAllProducts()
module.exports = { getAllSubscriptions, getOneSubscription, createOneSubscription, updateOneSubscription, deleteOneSubscription, getOneSubscriptionbymemberId, getSubscriptionsbymovieId }