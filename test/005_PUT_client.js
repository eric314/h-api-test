var test_005_PUT_client = function() {
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
            console.log('\t005\tPUT\t/client/{clientid}\tCreate / Sign up a user'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Create a client (positive tests / happy path)', () => {
        it('Should successfully create client on the backend with valid token, usertoken, and clientid', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 200 response
            // Verify client fields and types on the backend
            done();
        });
        it('Should populate full client object on backend with keys:  "country", "customFields", "email", "firstName", "hasFundedAccount", "id", "lastName", "phone", and "token"', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify backend via SQL
            done();
        });
        it('Should populate blank values or not update existing values for keys with no data in them:  "country", "customFields", "email", "firstName", "hasFundedAccount", "id", "lastName", "phone"', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify backend via SQL
            done();
        });

    }); // End Positive tests

    // Negative tests
    describe('Get basic information for a client (negative & error tests)', () => {
        it('Should gracefully handle Zero, null, very long, and missing required fields', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should return unauthorized 401 for bad token or usertoken', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });

        it('Should gracefully handle XSS injection script attacks in all required and optional fields', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle nonsense or very long values in custom fields', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle a string through clientid (long)', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle a "bit wiggle" - send a blank, a new value, a blank, the old value, and assert the original value is present. Do this for email/first/last/country/phone/custom', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle heavy transaction load for updates. Send 100 custom fields with random updates to key values at 10 per second for 5 minutes. Verify last key value set of updates is the one that sticks.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });


    }); // End Negative tests
}

module.exports = (test_005_PUT_client);