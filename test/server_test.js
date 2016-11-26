var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert;
var alumsController = require('../server/controllers/alumsController');

chai.use(chaiHttp);

var server;

describe('GET - root path', function() {
	beforeEach(function() {
		server = require('../server');
	});

	afterEach(function() {
		server.close();
	});

	it('returns a 200', function(done) {
		chai.request(server).get('/alums').end(function(error, response) {
			assert.equal(response.status, 200);
			done();
		});
		
	});

	it('returns alumni data', function(done) {
		chai.request(server).get('/alums').end(function(error, response) {
			var expected = {
				id: 1,
				firstName: 'Phil',
				lastName: 'Bob',
				email: 'phil@pp.com',
				track: 'marketing',
				cohort: 'Summer 2000',
				city: 'Boston'
			};

			alumsController.getAlumni().then((actual) => {
		     assert.deepEqual(actual[0], expected);
		     done();
		    });
		});
	});

	// it('returns alumni data by track', function(done) {
	// 	//var track = {'track': 'web-dev'};
	// 	var track = '?track=web-dev';
	// 	chai.request(server).get('/alums' + track).end(function(error, response) {
	// 		var expected = {
	// 			id: 2,
	// 			firstName: 'Philis',
	// 			lastName: 'Bob',
	// 			email: 'phil@pp.com',
	// 			track: 'web-dev',
	// 			cohort: 'Summer 2000',
	// 			city: 'Boston'
	// 		};

	// 		alumsController.getAlumni(track).then((actual) => {
	// 	     assert.deepEqual(actual[0], expected);
	// 	     done();
	// 	    });

			
	// 	});
	// });

	it('returns alumni data by id', function(done) {
		var alumId = 1;
		chai.request(server).get('/alum/' + alumId).end(function(error, response) {
			var expected = {
				id: 1,
				firstName: 'Phil',
				lastName: 'Bob',
				email: 'phil@pp.com',
				track: 'marketing',
				cohort: 'Summer 2000',
				city: 'Boston'
			};

			alumsController.getAlumById(alumId).then((actual) => {
		     assert.deepEqual(actual, expected);
		     done();
		    });
		});
	});
});


describe('POST - root path', function() {
	beforeEach(function() {
		server = require('../server');
	});

	afterEach(function() {
		server.close();
	});

	it('creates new alum', function(done) {
        chai
            .request(server)
            .post('/alums')
            .set('content-type', 'application/json')
            .send({
            	firstName: 'Bob',
				lastName: 'Penny',
 		   		email: 'world@com',
 		  		track: 'design',
 		  		cohort: 'Winter 2018',
 		  		city: 'Haifa'
            })
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                	assert.equal(response.status, 200);
                    done();
                }
            });
    });



});