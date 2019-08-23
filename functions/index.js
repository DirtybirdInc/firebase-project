const functions = require('firebase-functions');
const authHelper = require('./firebase-auth-helper');

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

exports.eventHandler = function (data, context) {
    // Checking that the user is authenticated.
    authHelper.isAuthenticated(context);
    return "Hello World!";
}

// this is a "Callable"
exports.fbEventHandler = functions.https.onCall(exports.eventHandler);

