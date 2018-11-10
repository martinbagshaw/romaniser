const test = require('tape');

// get function from romaniser file
// - where function we are testing resides
const romaniser = require('./romaniser.js');

// passing test
test('tape is working', function(t){
    t.equal(1, 1, 'One is equal to one');
    t.end();
})

// other tests
test('romaniser output', function(t){
    const actual = romaniser(1);
    const expected = 'I';
    t.equal(actual, expected), '1 should equal I';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(2);
    const expected = 'II';
    t.equal(actual, expected), '2 should equal II';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(3);
    const expected = 'III';
    t.equal(actual, expected), '3 should equal III';
    t.end();
})

// 4 and above
test('romaniser output', function(t){
    const actual = romaniser(4);
    const expected = 'IV';
    t.equal(actual, expected), '4 should equal IV';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(5);
    const expected = 'V';
    t.equal(actual, expected), '5 should equal V';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(6);
    const expected = 'VI';
    t.equal(actual, expected), '6 should equal VI';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(7);
    const expected = 'VII';
    t.equal(actual, expected), '7 should equal VII';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(8);
    const expected = 'VIII';
    t.equal(actual, expected), '8 should equal VIII';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(9);
    const expected = 'IX';
    t.equal(actual, expected), '9 should equal IX';
    t.end();
})

// after refactoring
test('romaniser output', function(t){
    const actual = romaniser(10);
    const expected = 'X';
    t.equal(actual, expected), '10 should equal X';
    t.end();
})

// larger numbers
test('romaniser output', function(t){
    const actual = romaniser(14);
    const expected = 'XIV';
    t.equal(actual, expected), '14 should equal XIV';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(18);
    const expected = 'XVIII';
    t.equal(actual, expected), '18 should equal XVIII';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(19);
    const expected = 'XIX';
    t.equal(actual, expected), '19 should equal XIX';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(20);
    const expected = 'XX';
    t.equal(actual, expected), '20 should equal XX';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(25);
    const expected = 'XXV';
    t.equal(actual, expected), '25 should equal XXV';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(35);
    const expected = 'XXXV';
    t.equal(actual, expected), '35 should equal XXXV';
    t.end();
})


// next fail - 40. Need L
test('romaniser output', function(t){
    const actual = romaniser(40);
    const expected = 'XL';
    t.equal(actual, expected), '40 should equal XL';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(68);
    const expected = 'LXVIII';
    t.equal(actual, expected), '68 should equal LXVIII';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(90);
    const expected = 'XC';
    t.equal(actual, expected), '90 should equal XC';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(99);
    const expected = 'XCIX';
    t.equal(actual, expected), '99 should equal XCIX';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(100);
    const expected = 'C';
    t.equal(actual, expected), '100 should equal C';
    t.end();
})

// 100+
test('romaniser output', function(t){
    const actual = romaniser(396);
    const expected = 'CCCXCVI';
    t.equal(actual, expected), '395 should equal CCCXCVI';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(400);
    const expected = 'CD';
    t.equal(actual, expected), '400 should equal CD';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(500);
    const expected = 'D';
    t.equal(actual, expected), '500 should equal D';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(1000);
    const expected = 'M';
    t.equal(actual, expected), '1000 should equal M';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(4000);
    const expected = 'MV';
    t.equal(actual, expected), '4000 should equal MV';
    t.end();
})
test('romaniser output', function(t){
    const actual = romaniser(5000);
    const expected = 'V';
    t.equal(actual, expected), '5000 should equal V';
    t.end();
})




// refactor tests
// const tests = [
//     {
//         actual :
//     }
// ]

const roman = [
    'V',
    'MV',
    'M',
    'D',
    'CD',
    'CCCXCVI',
    'XCIX',
    'XCIX',
    'XC',
    'LXVIII',
    'XL',
    'XXXV',
    'XXV',
    'XX',
    'XIX',
    'XVIII',
    'XIV',
    'X',
    'IX',
    'VIII',
    'VII',
    'VI',
    'V',
    'IV',
    'III',
    'II',
    'I'
];

const arabic = [
    5000,
    4000,
    1000,
    500,
    400,
    396,
    100,
    99,
    90,
    68,
    40,
    35,
    25,
    20,
    19,
    18,
    14,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
];


const errorMsg = 'this one is wrong';


roman.forEach(function(){
    test('romaniser output', function(t){
        const actual = romaniser(5000);
        const expected = 'V';
        t.equal(actual, expected), `${errorMsg}`;
        t.end();
    })
});