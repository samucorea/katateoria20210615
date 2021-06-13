const assert = require('chai').assert
const Range = require('../Range')


describe('Range GetLength method', function () {

    it('Both are inclusive. Range Length should be 3', function () {
        const range = new Range("[3,5]")

        assert.equal(range.GetLength(), 3);
    })

    it('Both are not inclusive. Range Length should be 1', function () {
        const range = new Range("(3,5)")

        assert.equal(range.GetLength(), 1);
    })

    it('Lower is not inclusive. Range Length should be 2', function () {
        const range = new Range("(3,5]")

        assert.equal(range.GetLength(), 2);
    })

    it('Upper is not inclusive. Range Length should be 2', function () {
        const range = new Range("[3,5)")

        assert.equal(range.GetLength(), 2);
    })
})