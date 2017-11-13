Hello,


Follow your preferred method of git cloning this repo to your local machine. It was written and tested on a Macbook Pro but should in theory work fine on Windows or Unix as well.

I think the only requirement is that you will need to have the latest version of Node/NPM installed.
https://nodejs.org/en/download/

To run this Hedgeable API test submission, ensure that the node_modules directory is *not* present.
$ rm -rf /node_modules

Perform a node install of the necessary modules:
$ npm install

This will fire up the ExpressJS web server, run the stub API, and execute the tests I've written for this exercise. You can scroll through the output and examine the code contents for details on my test specifications:
$ npm test


Enjoy,
EM
eric.mumford@gmail.com

