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
    describe('1', function() {
        it('should return "I"', function() {
            assert.strictEqual(toRoman(1), "I");
        });
    });
    describe('5', function() {
        it('should return "V"', function() {
            assert.strictEqual(toRoman(5), "V");
        });
    });
    describe('10', function() {
        it('should return "X"', function() {
            assert.strictEqual(toRoman(10), "X");
        });
    });
    describe('50', function() {
        it('should return "L"', function() {
            assert.strictEqual(toRoman(50), "L");
        });
    });
    describe('100', function() {
        it('should return "C"', function() {
            assert.strictEqual(toRoman(100), "C");
        });
    });
    describe('500', function() {
        it('should return "D"', function() {
            assert.strictEqual(toRoman(500), "D");
        });
    });
    describe('1000', function() {
        it('should return "M"', function() {
            assert.strictEqual(toRoman(1000), "M");
        });
    });
});

describe('Subtracted', function() {
    describe('449', function() {
        it('should return "CDXLIX"', function() {
            assert.strictEqual(toRoman(449), "CDXLIX");
        });
    });
    describe('994', function() {
        it('should return "CMXCIV"', function() {
            assert.strictEqual(toRoman(994), "CMXCIV");
        });
    });
});

describe('Thrice the same', function() {
    describe('3383', function() {
        it('should return "MMMCCCLXXXIII"', function() {
            assert.strictEqual(toRoman(3383), "MMMCCCLXXXIII");
        });
    });
    describe('838', function() {
        it('should return "DCCCXXXVIII"', function() {
            assert.strictEqual(toRoman(838), "DCCCXXXVIII");
        });
    });
});

describe('A few others', function() {
    describe('3999', function() {
        it('should return "MMMCCCLXXXIII"', function() {
            assert.strictEqual(toRoman(3999), "MMMCMXCIX");
        });
    });
    describe('1918', function() {
        it('should return "DCCCXXXVIII"', function() {
            assert.strictEqual(toRoman(1918), "MCMXVIII");
        });
    });
    describe('2674', function() {
        it('should return "DCCCXXXVIII"', function() {
            assert.strictEqual(toRoman(2674), "MMDCLXXIV");
        });
    });
});