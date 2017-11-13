var test_007_GET_client_holdings = function() {
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
            console.log('\t007\tGET\t/client/{clientid}/holdings\tGet client holdings'.bold);

            // Test Case Comments
            console.log('\nObservations:'.italic.blue);
            console.log('\
The /holdings endpoint appears to return a matrix of holdings objects. Test strategy for this will be three-pronged:\
\n1. Test the syntactical integrity of the response\
\n2. Test error situations and edge cases, and very long/hacky inputs\
\n3. Test data integrity and latency. This would be an extensive end to end script that exercises holdings changes and the correct response back through this endpoint. In particular exercise timing to determine the latency between a change made to client holdings on the backend and the time required for that change to be reflectd through this endpoint. This should be measured in milliseconds.\
\nNote: No HTTP status was given for a valid return code, so assuming 200.'.blue);
            done();
        });
    });

    // Test scenarios follow

    // Positive tests
    describe('Get client holdings (positive tests / happy path)', () => {
        it('Should successfully get well-formed client object with token, user token, and clientid that map to a known data set', (done) => {
            /* TODO: Write instrumentation to hit API and verify response object here            
             * SQL INSERT a known data set such as the example:
             
             {
             "amount": 5653.9,
             "perChange": 0.056,
             "security": {
             "assetClass": "US Equities",
             "id": 999,
             "name": "Apple, Inc.",
             "ticker": "AAPL"
             },
             "shares": 56,
             "weight": 24
             }
            
             * Verify 200 response
             * Verify response is a matrix containing an object
             * Verify object integrity of fields amout, perChange, shares, and weight
             * Verify imbedded security object containing keys assetClass,id,name,ticker
             * Question whether id belongs in security object? Is that a security id?
             * Verify client response fields and types
            
            */
            done();
        });
        it('Should handle zero-state for perChange and return the zero in the security object', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into record            
            // Verify 200 response
            done();
        });
        it('Should handle zero-state for shares and return the object showing zero or no record depending on business rule', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into record            
            // Verify 200 response
            done();
        });
        it('Should handle zero-state for weight and return the object showing zero or no record depending on business rules', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into record            
            // Verify 200 response
            done();
        });
        it('Should handle n-sized security objects embedded in the object response matrix depending on business rules', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure n-number securities inserted into client portfolio            
            // Verify 200 response
            done();
        });
    }); // End Positive tests

    // Negative tests
    describe('Get client holdings (negative & error tests)', () => {
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
        it('Should handle zero-state for amount and not return a security record', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into record            
            // Verify 401/403 response
            done();
        });
        it('Should not return record for blank security.assetClass', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into assetClass            
            // Verify 200 response for record missing in n-matrix or 401/403 response
            done();
        });
        it('Should not return record for blank or zero security.id', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure zero state inserted into id            
            // Verify 200 response for record missing in n-matrix or 401/403 response
            done();
        });
        it('Should not return record for blank security.name', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure blank state inserted into name            
            // Verify 200 response for record missing in n-matrix or 401/403 response
            done();
        });
        it('Should not return record for blank security.ticker', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here
            // SQL ensure blank state inserted into name            
            // Verify 200 response for record missing in n-matrix or 401/403 response
            done();
        });
    }); // End Negative tests

    // Data integrity and latency
    describe('Get client holdings (data integrity/latency)', () => {
        it('Get amount of each security in 100 test client each holding 50 securities. Add 1 to each amount. Immediately repeat the get amount calls. Ensure correct incremented amount values.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Create test data as described
            // Write scripts to loop through data as described
            // Verify amounts as described
            done();
        });
        it('Get shares of each holding in 100 test client each holding 50 securities. Add 1 to each shares. Immediately repeat the get calls. Ensure correct incremented shares values.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Create test data as described
            // Write scripts to loop through data as described
            // Verify amounts as described
            done();
        });
        it('Get perChange of each security in 100 test client each holding 50 securities. Add 0.001 to each perChange. Immediately repeat the get perChange calls. Ensure correct incremented perChange values.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Create test data as described
            // Write scripts to loop through data as described
            // Verify amounts as described
            done();
        });
        it('Get security.assetClass of each security in 100 test client each holding 50 securities. Append "(changed)" string to assetClass. Immediately repeat the get holdings calls. Ensure correct updated assetClass values.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Create test data as described
            // Write scripts to loop through data as described
            // Verify amounts as described
            done();
        });
        it('Get weight of each holding in 100 test client each holding 50 securities. Add 0.1 to each weight. Immediately repeat the get calls. Ensure correct incremented weight values.', (done) => {
            // TODO: Write instrumentation to hit API and verify response object here            
            // Create test data as described
            // Write scripts to loop through data as described
            // Verify amounts as described
            done();
        });

    });
}

module.exports = (test_007_GET_client_holdings);