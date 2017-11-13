process.env.NODE_ENV = 'test';

let api_stub = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.config.includeStack = false;
var should = chai.should();
var expect = chai.expect();
var supertest = require('supertest');
var hedgeable_api_stub = supertest('http://localhost:8080');
var colors = require('colors');

var test_001_POST_client = require('../test/001_POST_client.js');
var test_002_POST_client_login = require('../test/002_POST_client_login.js');
var test_003_PUT_client_reset_password = require('../test/003_PUT_client_resetpassword.js');
var test_004_GET_client = require('../test/004_GET_client.js');
var test_005_PUT_client = require('../test/005_PUT_client.js');
var test_006_PUT_client_id_comments_read = require('../test/006_PUT_client_id_comments_read.js');
var test_007_GET_client_holdings = require('../test/007_GET_client_holdings.js');
var test_008_POST_client_logout = require('../test/008_POST_client_logout.js');

// Print a summary of the API use cases
console.log('\n\tTest Strategy'.cyan);
console.log('\tThese integration-level API tests cover functional positive and negative testing. I occasionally call out nonfunctional performance evaluations against specific use cases where I found them, although a holistic performance assessment with the product and engineering leads would be required to fully map out and implement a performance evaluation test suite with a suitable tool such as jmeter, gatling, or locustio.'.gray);
console.log('\nNote: All test scenarios were not implemented (I stopped at 8.) I felt that continuing through the entire API beyond what I have given you here would not give further significant insight into my capabilities. Thank you for this opportunity.');

console.log('\n\tIntegration Test Ordering'.cyan);
console.log('\tTC #\tMethod\tEndpoint\t\t\t\tPurpose\t\t\t'.underline.cyan);
console.log('\t001\tPOST\t/client\t\t\t\t\tCreate/Sign up a user'.gray);
console.log('\t002\tPOST\t/client/login\t\t\t\tLogin a user'.gray);
console.log('\t003\tPUT\t/client/resetpassword\t\t\tReset password'.gray);
console.log('\t004\tGET\t/client\t\t\t\t\tGet client'.gray);
console.log('\t005\tPUT\t/client/{clientid}\t\t\tCreate / Sign up a user'.gray);
console.log('\t006\tPUT\t/client/{clientid}/comments/read\tMark comments as read'.gray);
console.log('\t007\tGET\t/client/{clientid}/holdings\t\tGet client holdings'.gray);
console.log('\t008\tPOST\t/client/logout\t\t\t\tLogout client'.gray);

// Run each test file
test_001_POST_client();
test_002_POST_client_login();
test_003_PUT_client_reset_password();
test_004_GET_client();
test_005_PUT_client();
test_006_PUT_client_id_comments_read();
test_007_GET_client_holdings();
test_008_POST_client_logout();