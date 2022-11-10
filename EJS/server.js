const express=require("express");
const path=require("path");
const ejs=require("ejs");
const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser');
const multer=require("multer");
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
    console.log('mysql connected..!! u dumb......!!!!');
});

//multer
var imagename='';
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public');
    },
    filename:(req,file,cb)=>{
        console.log(file);
        imagename=Date.now()+path.extname(file.originalname)+'';
        cb(null,imagename);
    }
});
const filefilter=(req,file,cb)=>{if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/webp'){
    cb(null,true)
}
else{
    cb(null,false)
}};
const upload=multer({storage:storage,fileFilter:filefilter});


//route from homepage
app.get('/',(req,res)=>{
    let sql="select*from product";
    let query=conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.render("product_views",{
            results:results
        });
    });
});


//add product 
app.get('/productadd',(req,res)=>{
    res.render("producta");
});

//display table with added product 
app.post('/saveproduct',upload.single('file'),(req,res,next)=>{
        let data={product_id:req.body.id,product_name:req.body.name,product_price:req.body.price,product_image:imagename};
        let sql="insert into product set?";
        let query=conn.query(sql,data,(err,results)=>{
            if(err) throw err;
            res.redirect('/');
        });
});

//route for delete
app.get('/productdelete/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    let sql="delete from product where product_id="+id;
    let query=conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

//product edit 
app.get('/productedit/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    let sql="select*from product where product_id="+id;
    let query=conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.render('product_edit',{
            results:results
        });
    });
});

//route for update data
app.post('/update',(req,res)=>{
    let sql="update product set product_name='"+req.body.name+"',product_price="+req.body.price+" where product_id="+req.body.id;
    console.log(sql);
    let query=conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/');
    });
});


//handler
app.listen(4040,()=>{
    console.log("express server running on 4040 idiot!!")
});