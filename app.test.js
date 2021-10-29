'use strict';
const { response } = require('express');
const request = require('supertest');
const app = require('./app');

describe('Testing the service',() => {
    test('GET /', async(done) => {
        const reqponse = await request(app)
        .get('/')
        expect(response.statusCode).toBe(200);
        done()
    });
});

