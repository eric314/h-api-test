var test_008_POST_client_logout = function() {
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
            console.log('\t008\tPOST\t/client/logout\t\t\t\tLogout client'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Logout a user (positive tests / happy path)', () => {
        it('Should successfully log user out with valid token, usertokcen, clientid', (done) => {
            // TODO: Instrumentation to verify response object here
            // Log in user
            // Verify logged in state
            // Send POST
            // Verify loggd out state
            done();
        });
        it('Should contain empty return payload', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 201 response is empty
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Logout a user (negative & error tests)', () => {
        it('Should gracefully error with Zero, null, very long, string type, and missing clientid', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should return unauthorized 401 for bad token or usertoken', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });
        it('Should gracefully handle XSS injection script attacks in each field', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle repeated logout attempts when user is already logged out', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully error if login is successful, the account is disabled during the session, and logout is attempted', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
    }); // End Negative tests
}

module.exports = (test_008_POST_client_logout);