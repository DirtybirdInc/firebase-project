const assert = require('assert');
const authHelper = require('./firebase-auth-helper');
const indexEventHandler = require('./index');
const functions = require('firebase-functions');


describe('firebase-auth-helper', function () {
    describe('isAuthenticated', function () {
        it('should raise a functions.https.HttpsError when context.auth is null', function () {
            try {
                authHelper.isAuthenticated({ auth: null })
            } catch (e) {
                assert.equal(e.constructor, functions.https.HttpsError)
            }
        });
        it('should run ok when context.auth is not null', function () {
            authHelper.isAuthenticated({ auth: {} })
        });
    });
});


describe('indexEventHandler', function () {
    describe('eventHandler', function () {
        it('should return "HelloWorld" when context.auth is not null', function () {
            assert.equal(indexEventHandler.eventHandler(null, { auth: {} }), "Hello World!");
        });
        it('should raise a functions.https.HttpsError when context.auth is null', function () {
            try {
                indexEventHandler.eventHandler(null, { auth: null })
            } catch (e) {
                assert.equal(e.constructor, functions.https.HttpsError)
            }
        });
    });
});