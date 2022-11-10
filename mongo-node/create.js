var MC=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MC.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("MONGO");
    dbo.createCollection("customer",function(err,res){
        if(err) throw err;
        console.log("collection created....!!!");
        db.close();
    });
});
