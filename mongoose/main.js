
var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
const path=require("path");
var database = require('./config/database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
app.set('view engine', 'ejs'); 
var port     = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,'assets')));

var Employee = require('./models/employee');
 
mongoose.connect(database.url);

console.log(database.url);

//get all employee data from db
app.get('/', function(req, res) {
	// use mongoose to get all todos in the database
	Employee.find(function(err, employees) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
			res.render('employee_views',{
				results: employees
			  });
		 // return all employees in JSON format
	});
});
app.get('/api/add',(req, res) => {
	res.render("employee_a");
 });
// create employee and send back all employees after creation
app.post('/api/employees_create', function(req, res) {
	// create mongose method to create a new record into collection
	Employee.create({
		id:req.body.id,
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}, function(err, employee) {
		if (err)
			res.send(err);

		// get and return all the employees after newly created employe record
		Employee.find(function(err, employees) {
			if (err)
				res.send(err)
		res.render('employee_views',{
					results: employees
				  });
		});
	});

});

// get a employee with ID of 1
app.get('/api/employeesfind/:id', function(req, res) {
	let id = req.params.id;
	console.log(id);
	var query = { id : id};
	Employee.find(query, function(err, employee) {
	 if (err)
			res.send(err)
	console.log(employee);
	res.render('employee_edit',{
				results: employee
			  });
		
	});

});



// create employee and send back all employees after creation
app.post('/api/employeesupdate', function(req, res) {
	// create mongose method to update a existing record into collection
	
	var data = {
		id : req.body.id,
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}
	console.log("hi");
	console.log(data);
	var query = { id : req.body.id};

	// save the user
	Employee.updateOne(query, data, function(err, employee) {
	if (err) throw err;

	res.redirect("/");
	});
});


// delete a employee by id
app.get('/employeesdelete/:employee_id', function(req, res) {
	console.log(req.params.employee_id);
	let id = req.params.employee_id;
	Employee.remove({
		id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.redirect("/");	
	});
});





app.listen(port);
console.log("App listening on port : " + port);