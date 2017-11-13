let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 8080;
let morgan = require('morgan');
var colors = require('colors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/json'
}));

app.all("/", (req, res) => res.json({
    message: "Welcome to a Hedgeable API stub."
}));


app.post('/client', function(req, res) {
    var token, email, password, firstname, lastname;
    var body = {};

    if (typeof req.body == 'object') body = req.body;
    if (typeof req.body == 'string') body = JSON.parse(req.body);

    //body = JSON.parse(JSON.stringify(req.body));

    //console.log(body);

    if (body) {
        var err = false;
        try {
            if (typeof body.token != 'undefined') {
                var token = body.token;
                if (token != '109HIUBU732873HJBSJ') {
                    err = true;
                    res.status(401);
                    res.json({
                        error: 'Token supplied is unauthorized.'
                    });
                }
            } else {
                err = true;
                res.status(401); // unauthorized
                res.json({
                    error: 'Missing field: client API token.'
                });
            }
            if (typeof body.email != 'undefined') {
                var email = req.params.email;
            } else {
                err = true;
                res.status(403); // forbidden
                res.json({
                    error: 'Missing field: email.'
                });
            }
            if (typeof body.password != 'undefined') {
                var password = req.params.password;
            } else {
                err = true;
                res.status(403); // forbidden
                res.json({
                    error: 'Missing field: password.'
                });
            }
            if (typeof body.firstname != 'undefined') {
                var firstname = req.params.firstname;
            } else {
                err = true;
                res.status(403); // forbidden
                res.json({
                    error: 'Missing field: firstname.'
                });
            }
            if (typeof body.lastname != 'undefined') {
                var token = req.params.lastname;
            } else {
                err = true;
                res.status(403); // forbidden
                res.json({
                    error: 'Missing field: lastname.'
                });
            }

            if (typeof body.country != 'undefined') {
                if (body.country != 'US') {
                    var country = req.params.country;
                    err = true;
                    res.status(403); // forbidden
                    res.json({
                        error: 'Country must be US.'
                    });
                }
            }

            if (err == false) {
                //console.log('Server: No errors, returning response!'.green);
                var response = {};
                response.country = 'US';
                response.customFields = {};
                if (typeof body.custom == 'string') {
                    let custom_stripped = body.custom.replace(/\'/g, '"');
                    let object_stripped = {};
                    object_stripped = JSON.parse(custom_stripped);
                    //console.log(object_stripped);
                    Object.keys(object_stripped).forEach((key)=> {
                        response.customFields[key] = object_stripped[key];
                    });
                    response.customFields = JSON.stringify(response.customFields);
                }
                response.firstName = body.firstname;
                response.lastName = body.lastname;
                response.email = body.email;
                response.hasFundedAccount = '0';
                response.id = '999';
                if (typeof body.phone != 'undefined') response.phone = body.phone;
                response.token = body.token;
                res.status(201); // Created
                res.send(response);
            }
        } catch (e) {
            console.log('Server side error:'.red, e);
            res.status(500);
            res.send('Unhandled exception in Hedgeable stub API.');
        }
    } else {
        console.log('Undefined body sent in request; here is res object:');
        console.log(JSON.stringify(res, 1, 1));
    }
});

app.listen(port);
let banner = "Hedgeable stub API is listening on port " + port;
console.log(banner.black.inverse);

module.exports = app;