var test_002_POST_client_login = function() {
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
            console.log('\t002\tPOST\t/client/login\t\tLogin a user'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Login a user (positive tests / happy path)', () => {
        it('Should successfully process Valid username, password, token sent with no custom fields', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 201 response
            done();
        });
        it('Should successfully process Valid username, password, token sent with custom fields', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 201 response
            done();
        });
        it('Should contain all client payload keys: "country", "customFields", "email", "firstName", "hasFundedAccount", "id", "lastName", "phone", and "token"', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 201 response
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Login a user (negative & error tests)', () => {
        it('Should gracefully handle Zero, null, very long, and missing username', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should return unauthorized 401 for bad token or usertoken', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });

        it('Should gracefully handle Zero, null, very long, and missing password', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle Zero, null, very long, and missing token', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle Zero, null, very long, and badly formatted custom fields', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle XSS injection script attacks in each field', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle repeated login attempts when user is already logged in', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should fail if login is successful, the account is disabled during the session, and another login is attempted', (done) => {
            // TODO: Instrumentation to verify response object here
            // Verify 401/403 response
            done();
        });
    }); // End Negative tests
}

module.exports = (test_002_POST_client_login);