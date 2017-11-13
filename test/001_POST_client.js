var test_001_POST_client = function() {
    let chai = require('chai');
    let chaiHttp = require('chai-http');
    let api_stub = require('../server');
    var should = chai.should();
    var expect = chai.expect();
    var supertest = require('supertest');
    var hedgeable_api_stub = supertest('http://localhost:8080');
    var colors = require('colors');

    // Print a header for these test scenarios
    describe('', () => {
        it('', (done) => {
            console.log('\tTC #\tMethod\tEndpoint\t\tPurpose\t\t\t'.underline.blue);
            console.log('\t001\tPOST\t/client\t\t\tCreate/Sign up a user'.bold);

             // Test Case Comments
            console.log('\nA note on test instrumentation:'.italic.blue);
            console.log('This first test case is implemented against a Hedgable stub API I wrote which is running on the ExpressJS framework. These tests actually hit the API and process real HTTP responses to demonstrate my ability to do so. All tests following indicate the test case only and leave out the instrumentation.'.blue);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Create a user (positive tests / happy path)', () => {
        it('Should successfully Create client with authorized token', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(201); // Created
                        response.body.token.should.equal('109HIUBU732873HJBSJ');
                        // Make sure the account is not funded upon creation
                        response.body.hasFundedAccount.should.include('0');
                        // Make sure we send back an id
                        response.body.should.have.property('id');
                        done();
                    }
                });
        });
        it('Should successfully Create client with optional phone number', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith",
                    "phone": '5558675309'
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(201); // Created
                        response.body.phone.should.deep.include('5558675309');
                        done();
                    }
                });
        });
        it('Should successfully Create client with optional custom fields', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith",
                    "phone": "5558675309",
                    "custom": "{ 'artist_name': 'phil collins', 'jacket_required': 'no' }"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('===\nresponse.body = ', response.body);
                        console.log('\tAPI error response: %s Err= %s', response.text, err);
                        done(err);
                    } else {
                        response.status.should.equal(201); // Created
                        response.body.customFields.should.deep.include('artist_name');
                        response.body.customFields.should.deep.include('phil collins');
                        response.body.customFields.should.deep.include('no');
                        response.body.customFields.should.deep.include('jacket_required');
                        done();
                    }
                });
        });
    }); // End Positive tests

    // Negative tests
    describe('Create a user (negative & error tests)', () => {
        it('Should ensure against client being created with unauthorized token', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "abc",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(401); // forbidden
                        done();
                    }
                });
        });
        it('Should ensure against client being created with missing email', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
        it('Should ensure against client being created with missing password', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "firstname": "John",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
        it('Should ensure against client being created with missing firstname', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
        it('Should ensure against client being created with alternate capitalization of firstName', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstName": "John",
                    "lastname": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
        it('Should ensure against client being created with capitalization of lastName', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastName": "Smith"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done(err);
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
        it('Should ensure against creating client outside the US', (done) => {
            hedgeable_api_stub
                .post('/client')
                .set('Accept', 'application/json')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "token": "109HIUBU732873HJBSJ",
                    "email": "test123@hedgeable.com",
                    "password": "QAtest2017!",
                    "firstname": "John",
                    "lastname": "Smith",
                    "country": "UK"
                })
                .end((err, response) => {
                    if (err) {
                        console.log('\tAPI error response: ', response.text);
                        done();
                    } else {
                        response.status.should.equal(403); //unauthorized
                        done();
                    }
                });
        });
    }); // End Negative tests
}

module.exports = (test_001_POST_client);
