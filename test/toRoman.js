const toRoman = require('../core/toRoman.js');
const assert = require('assert');
describe('Errors', function() {
    describe('string', function() {
        it('should throw TypeError', function() {
            assert.throws(()=>toRoman('test'),TypeError,"Parameter is not a number");
        });
    });
    describe('float', function() {
        it('should throw TypeError', function() {
            assert.throws(()=>toRoman(12.3),TypeError,"Parameter is not an integer");
        });
    });
    describe('bool', function() {
        it('should throw TypeError', function() {
            assert.throws(()=>toRoman(true),TypeError,"Parameter is not an integer");
        });
    });
    describe('Greatly exceeding lower boundary', function() {
        it('should throw Rang Error', function() {
            assert.throws(()=>toRoman(-101),RangeError);
        });
    });
    describe('0', function() {
        it('should throw RangeError', function() {
            assert.throws(()=>toRoman(0),RangeError);
        });
    });
    describe('4000', function() {
        it('should throw RangeError', function() {
            assert.throws(()=>toRoman(4000),RangeError);
        });
    });
    describe('Greatly exceeding upper boundary', function() {
        it('should throw RangeError', function() {
            assert.throws(()=>toRoman(987654),RangeError);
        });
    });

});

describe('SingleSign', function() {

        it('1', function() {
            assert.strictEqual(toRoman(1), "I");
        });

        it('5', function() {
            assert.strictEqual(toRoman(5), "V");
        });

        it('10', function() {
            assert.strictEqual(toRoman(10), "X");
        });

        it('50', function() {
            assert.strictEqual(toRoman(50), "L");
        });

        it('100', function() {
            assert.strictEqual(toRoman(100), "C");
        });

        it('500', function() {
            assert.strictEqual(toRoman(500), "D");
        });

        it('1000', function() {
            assert.strictEqual(toRoman(1000), "M");
        });

});

describe('Subtracted', function() {

        it('449', function() {
            assert.strictEqual(toRoman(449), "CDXLIX");
        });

        it('994', function() {
            assert.strictEqual(toRoman(994), "CMXCIV");
        });

});

describe('Thrice the same', function() {

        it('3383', function() {
            assert.strictEqual(toRoman(3383), "MMMCCCLXXXIII");
        });

        it('838', function() {
            assert.strictEqual(toRoman(838), "DCCCXXXVIII");
        });

});

describe('A few others', function() {

        it('3999', function() {
            assert.strictEqual(toRoman(3999), "MMMCMXCIX");
        });
        it('1918', function() {
            assert.strictEqual(toRoman(1918), "MCMXVIII");
        });
        it('s2674', function() {
            assert.strictEqual(toRoman(2674), "MMDCLXXIV");
        });
});