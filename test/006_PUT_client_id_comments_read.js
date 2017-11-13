var test_006_PUT_client_id_comments_read = function() {
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
            console.log('\t006\tPUT\t/client/{clientid}/comments/read\tMark comments as read'.bold);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Mark comments as read (positive tests / happy path)', () => {
        it('Should mark all unread comments as read on backend with valid token, usertoken, and clientid', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Write SQL to set all comments to unread on the backend
            // Verify 200 response
            // Verify comment status = read on the backend
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Mark comments as read (negative & error tests)', () => {
        it('Should gracefully no-op for all comments already read', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Write SQL to set all comments to read, fire request
            // Write SQL to hit backend to check before and after comments read             
            // Verify 201 response
            done();
        });
        it('Should return unauthorized 401 for invalid or missing token, usertoken, or clientid', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401 response
            done();
        });
        it('Should gracefully handle XSS injection script attacks on all 3 fields', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle nonsense or very long values on all 3 fields', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });
        it('Should gracefully handle a string through clientid (long)', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // Verify 401/403 response
            done();
        });


    }); // End Negative tests
}

module.exports = (test_006_PUT_client_id_comments_read);