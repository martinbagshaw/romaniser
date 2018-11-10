
// values object - used for conversion in romaniser function
// - converts any number over 3
// - after conversion, use while loop to add up to 3 'I's
const values = [
    {
        arabic: 5000,
        roman: 'V'
    },
    {
        arabic: 4000,
        roman: 'MV'
    },
    {
        arabic: 1000,
        roman: 'M'
    },
    {
        arabic: 900,
        roman: 'CM'
    },
    {
        arabic: 500,
        roman: 'D'
    },
    {
        arabic: 400,
        roman: 'CD'
    },
    {
        arabic: 100,
        roman: 'C'
    },
    {
        arabic: 90,
        roman: 'XC'
    },
    {
        arabic: 50,
        roman: 'L'
    },
    {
        arabic: 40,
        roman: 'XL'
    },
    {
        arabic: 10,
        roman: 'X'
    },
    {
        arabic: 9,
        roman: 'IX'
    },
    {
        arabic: 5,
        roman: 'V'
    },
    {
        arabic: 4,
        roman: 'IV'
    },
    {
        arabic: 1,
        roman: 'I'
    }
]

function romaniser(num){
    let result = '';
    // let remaining = num;

    values.forEach(function(value){
        // keep looping over. Previously used if statement, which would return
        while(num >= value.arabic){
            result += value.roman;
            num -= value.arabic;
        }
    });

    // adds up to 3 'I's in a string
    // while (num > 0){
    //     result += 'I';
    //     num -= 1; // or num --;
    // }
    return result;

}

module.exports = romaniser;