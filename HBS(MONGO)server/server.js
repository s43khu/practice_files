const path=require('path');
const express=require('express');
const hbs=require('hbs');
const bodyParser = require('body-parser');
const app=express();  //expr
var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mylink"; //client link
//database started
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Database Created!!");
    db.close(); //database close
});

//set views file
app.set('views',path.join(__dirname,'views'));

//set view engine
app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

    //set public folder as static folder for static file
app.use('/assets',express.static(__dirname+'/public'));
//same(learn)syntax
//route for homepage
app.get('/',(req,res)=>{ 
    MongoClient.connect(url,function(err,db)
    {
        if (err) throw err;
        var dbo=db.db("mylink");
         dbo.collection('product').find().toArray().then(result=>{ //for view product material
        console.log(result);
        res.render('product_views',{results:result});
       }).catch(error=>console.error(error))
    });
});
//route for delete
app.get('/productdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo=db.db("mylink");
        var myquery={product_id:id};
        dbo.collection("product").deleteOne(myquery,function(err,obj){
            if (err) throw err;
            console.log("1 product deleted");
            res.redirect('/');
        });
    });
});
//
app.get('/productedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("mylink");
        var query = {product_id:id};
        dbo.collection("product").find(query).toArray(function(err , obj){
            console.log(obj);
            res.render("editproduct",{results:obj});
        });
    });
});
//route for update data
app.post('/update',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo=db.db("mylink");
        var myquery={product_id:req.body.id};
        var newvalues={$set:{product_name:req.body.name,product_price:req.body.price}}
        console.log(myquery);
        console.log(newvalues);
        dbo.collection("product").updateOne(myquery,newvalues,function(err,res){
            if (err) throw err;
            console.log(res);
            console.log("1 document updated");
            db.close();
        });
        res.redirect('/');
    });
});

app.get('/productadd',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
    res.render("addproduct");
});
});

app.post('/saveproduct',(req,res)=>{
    var myquery={product_id:req.body.id,product_name:req.body.name,product_price:req.body.price};
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo=db.db("mylink");
        dbo.collection("product").insertOne(myquery,(err,res)=>{
            db.close();
        });
        res.redirect('/');
    });
});

//server listening
app.listen(5050,()=>{
    console.log('server is running at port 5050');
});