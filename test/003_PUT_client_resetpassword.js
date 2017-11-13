var test_003_PUT_client_reset_password = function() {
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
            console.log('\t003\tPUT\t/client/resetpassword\tReset password'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Reset a password and verify email receipt (positive tests / happy path)', () => {
        it('Should successfully process Valid token, email, and send email to test account', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // TODO: Ensure developers have opened outgoing mail to mailinator
            // Verify 201 response
            done();
        });
        it('Should render email with proper template and content across mail clients', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // Verify rendered email against comp
            done();
        });
        it('Should render email with correct, performant links', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // Ensure all links are valid and correct
            // Follow links and measure response times < 3.0s to mail client
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Reset a password (negative & error tests)', () => {
        it('Should gracefully handle Zero, null, very long, and missing token', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // Verify 401/403 response
            done();
        });
        it('Should return unauthorized 401 for bad token or usertoken', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });

        it('Should gracefully handle Zero, null, very long, and missing email', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle XSS injection script attacks in token and email field', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle nonsense or very long altered values in email link URL parameters', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
    }); // End Negative tests
}

module.exports = (test_003_PUT_client_reset_password);