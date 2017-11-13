var test_004_GET_client = function() {
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
            console.log('\t004\tGET\t/client\t\t\tGet client'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Get basic information for a client (positive tests / happy path)', () => {
        it('Should successfully get client object with valid token, user token, and clientid', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 200 response
            // Verify client response fields and types
            done();
        });
        it('Should return full client object with keys:  "country", "customFields", "email", "firstName", "hasFundedAccount", "id", "lastName", "phone", and "token"', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 200 response
            done();
        });
        it('Should return blank values for client keys with no data in them:  "country", "customFields", "email", "firstName", "hasFundedAccount", "id", "lastName", "phone"', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 200 response
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Get basic information for a client (negative & error tests)', () => {
        it('Should gracefully handle Zero, null, very long, and missing token', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should return unauthorized 401 for bad token or usertoken', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });

        it('Should gracefully handle Zero, null, very long, and missing user token', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle Zero, null, very long, string type, and missing clientid', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle XSS injection script attacks in token, user token, and clientid parameters', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle nonsense or very long altered values in email link URL parameters', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
    }); // End Negative tests
}

module.exports = (test_004_GET_client);