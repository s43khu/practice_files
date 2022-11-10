const express=require("express");
const path=require("path");
const ejs=require("ejs");
const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser');
const multer=require("multer");
const vm = require("vm");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/assets',express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//create a connection
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'creed'
});

//connect to database
conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql is connected :-)');
});

//route for homepage
app.get('/',(req,res)=>{
    res.render("login");
});

app.get('/admin',(req,res)=>{
    res.render("admin");
});

app.get('/invalid',(req,res)=>{
    res.render("invalid");
});

app.get('/customer',(req,res)=>{
    res.render("home");
});

app.get('/register',(req,res)=>{
    res.render("signup");
});

//route for insert data
app.post('/signup',(req,res)=>{
    let data={username:req.body.username,
    password:req.body.passsword,
type:"customer"};
let sql="insert into login set?";
let query=conn.query(sql,data,(err,results)=>{
    if(err) throw err;
    res.redirect('/');
});
});

//route for delete
app.post('/login',(req,res)=>{
    let sql="select*from login where username='"+req.body.username+"' and password='" + req.body.password+"'";
    console.log(sql);
    let query=conn.query(sql,(err,results)=>{
        if(err) throw err;
        if(results.length>0)
        {
            var rows=JSON.parse(JSON.stringify(results[0])); 
            if(rows.type=="admin")
            {
                res.redirect('/admin');
            }
            if(rows.type=="customer")
            {
                res.redirect('/customer');
            }
            else
            {
                res.redirect('/invalid');
            }
        }
        else
        {
            res.redirect('/invalid');
        }
    });
});

//port
app.listen(1010,()=>{
    console.log("1010 is the port no.")
});