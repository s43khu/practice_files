var MC=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MC.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("MONGO");
    var data=[{name:"mahesh",address:"moh"},{name:"ramu",address:"chd"},{name:"haria",address:"pkl"}];
    dbo.collection("customer").insertMany(data,function(err,res){
        if(err) throw err;
        console.log("record inserted...!!!");
        db.close();
    });
});