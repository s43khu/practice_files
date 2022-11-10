var MC=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MC.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("MONGO");
    var query={name:"ramu"};
    dbo.collection("customer").find(query).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        //console.log(res.name);
        db.close();
    });
});