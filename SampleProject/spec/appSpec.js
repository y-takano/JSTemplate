
var require = require;
var add = add;
if (require !== undefined) {
    add = require('../src/app.js');
}

describe('add関数のテスト', function() {
    it('1 + 2 は 3', function() {
        expect(add(1, 2)).toBe(3);
    });
});