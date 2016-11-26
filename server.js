var express = require('express');
var app = express();
var router = express.Router();
var models = require('./server/models/index');
var alumsController = require('./server/controllers/alumsController');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Alumni Routes

app.get('/alums', (request, response) => {
 alumsController.getAlumni().then((alums) => {
   response.json(alums);
 });
});

app.get('/alum/:id', (request, response) => {
 alumsController.getAlumById(request.params.id).then((alum) => {
   response.json(alum);
 });
});

app.post('/alums', (request, response) => {
	console.log(request.body);
 alumsController.createAlum(request.body).then((alums) => {
   response.json(alums);
 });
});

var server = app.listen(1337, function() {
    console.log('Server is listening');
});

module.exports = server;















// var express = require('express');
// var app = express();
// var models = require('./server/models/index');
// var alumsController = require('./server/controllers/alumsController');
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // var alumni = [{
// //         firstName: 'Emil',
// //         lastName: 'Ray',
// //         track: 'WebDev',
// //         cohort: 'Fall 2016',
// //         }];

// // app.get('/', function(request, response) {
// //     models.Alums.findAll({}).then(function(alums) {
// //     response.json(alums);
// //   });
// // });

// // Alumni Routes
// //import alumsController from './controllers/alumsController';

// // Get all alums
// app.get('/alums', (request, response) => {
// 	// if (Object.keys(request.query) != 0) {
// 	// 	console.log('yes');}
// 	// else {console.log('no');}

//  alumsController.getAlumni().then((alums) => {
//    response.json(alums);
//  });
// });

// // Get alum by id
// app.get('/alum/:id', (request, response) => {
// 	//console.log(request.body);
//  alumsController.getAlumById(request.params.id).then((alum) => {
//  	//console.log("mu alum:")
//  	//console.log(alum);
//    response.json(alum);
//  });
// });

// // app.post('/', function(req, res) { 
// // 	console.log(req.body);
// // 	res.json('bye'); });


// // Create new alum
// app.post('/alums', (request, response) => {
//  alumsController.createAlum(request.body).then((alums) => {
//    response.json(alums);
//  });
// });

// // app.post('/alums', function(request, response) {
// // 	console.log(request);
// //   models.Alums.create({
// //   	firstName: request.body.firstName,
// //   	lastName: request.body.lastName,
// //     email: request.body.email
// //   }).then(function(alum) {
// //     response.json(alum);
// //   });
// // });



// //
// // app.get('/', (request, response) => {
// //   getAlumni().then((alumni) => {
// //     response.json(alumni);
// //   });
// // });

// var server = app.listen(1337, function() {
//     console.log('Server is listening');
// });

// module.exports = server;



