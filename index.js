function sum(n1, n2){
    return (n1 + n2);
}


function sumOfEven(arr) {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count += arr[i]
        }
    }
    return count
}


function changeNumber(num) {
    return (num % 2 === 0) ? num * 2 : num * 3;
}


    function primeNumber(n) {

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return n > 1
    }

    function countNegative(arr) {

        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] < 0) {
                    ++count;
                    break;
                }
            }
        }
        return count;
    }


    function powerOf(number, power) {
        if (typeof number !== 'number' || typeof power !== 'number') {
            return NaN;
        }
        return number ** power;
    }


    function factorialOf(num) {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial *= i
        }
        if (num === 0) {
            return 1
        } else if (typeof num !== 'number') {
            return NaN
        } else return factorial
    }


    function vowelsToUpperCase(str) {
        if (typeof str !== 'string') {
            return 'name should be a string'
        }
        let vowels = 'aeiou';
        let str2 = '';
        for (let i = 0; i < str.length; i++) {

            if (vowels.indexOf(str[i]) >= 0) {
                str2 += str[i].toUpperCase()
            }
        }
        return str2
    }


    function greet(name) {

        if (typeof name !== 'string') {
            return 'name should be string'
        }
        return 'Hello' + name;

}

function sqrtR(a, b, c){
    if (typeof a !== 'number' ||typeof b !== 'number' || typeof c !== 'number') {
        return NaN}
    let abc = Math.pow(a, 3) + Math.pow(b, 2) + Math.pow(c, 4)
    return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b - c)) / abc)).toFixed(2)
}



function addOne(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i]++
    }
    return arr
}


module.exports = {sum,sumOfEven,changeNumber, primeNumber,countNegative, powerOf,factorialOf,vowelsToUpperCase,greet,sqrtR,addOne};