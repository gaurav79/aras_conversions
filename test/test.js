'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('getArasData function test', () => {
    it('should return same string', () => {
        var data = 'test data'
        var result = index.getArasData(data);
        expect(result).to.equal(data);
    });
});