const supertest = require('supertest')
const app = require('../src/app')

describe('App module', () =>{
    describe('Hello world', () => {
        return supertest(app)
        .get('/')
        .expect(200, { messsage: 'Hello World!'})
    })
})