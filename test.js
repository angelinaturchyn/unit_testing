const expect = require('chai').expect;
const {sum,sumOfEven,changeNumber, primeNumber,countNegative, powerOf,factorialOf,vowelsToUpperCase,greet,sqrtR,addOne} = require('./index');


describe('sum function',()=>{

it('should calculate sum of positives', ()=>{
    expect(sum(10, 1)).eql(11)
})

it('should calculate sum of negatives', () =>{
    expect(sum(-10,-1)).eql(-11)
})

it ('should calculate zeros', ()=>{
    expect(sum(0,0)).eq(0)
})

it ('should compare arrays', ()=>{
    expect([1, 2, 3]).eql([1, 2, 3])
 });

});



describe('sum of even function',()=> {

    it('should calculate sum of even positives', ()=>{
        expect(sumOfEven([1, 2, 3, 4, 5, 6, 7])).eql(12)
    })

    it('should calculate sum of even negatives', () =>{
        expect(sumOfEven([-1, -2, -3, -4, -5, -6, -7])).eql(-12)
    })

    it ('should compare arrays', ()=>{
        expect([1, 2, 3, 4, 5, 6, 7]).eql([1, 2, 3, 4, 5, 6, 7])
    });

    it ('should calculate zeros', ()=>{
        expect(sumOfEven([0, 0, 0, 0, 0, 0, 0])).eq(0)
    })

});



describe('change number function',()=>{

    it('should multiply num * 2 if the number is even', ()=>{
        expect(changeNumber(2)).eql(4);
    })

    it('should multiply num * 3 if the number is odd', () =>{
        expect(changeNumber(3)).eql(9);
    })

    it ('should return NaN if either argument is not a a number', ()=>{
        expect (changeNumber(NaN)).eql(NaN);
    })

    it ('should return 0 if number === 0 ', ()=>{
        expect (changeNumber(0)).eql(0);
    })
});


describe('prime number function',()=> {

    it('should find a prime number', ()=>{
        expect(primeNumber (2)).eql(true)
    })

    it ('should return NaN if either argument is not a a number', ()=>{
        expect (primeNumber(NaN)).eql(false);
    })

    it ('should return false if number === 1', ()=>{
        expect(primeNumber(1)).eql(false)
    });

});



describe('count negative elements in arr function',()=> {

    it('should calculate all negative elements', ()=>{
        expect(countNegative([[2, 4, 3, 5,-2 ],[-1, 2, 3],[-1, 2, 3, 4, 5, 6]])).eql(3)
    })

    it ('should return NaN if either argument is not a a number', ()=>{
        expect (countNegative(NaN)).eql(0);
    })

    it('should calculate only negative elements', ()=>{
        expect(countNegative([[2, 4, 3, 5,2 ],[1, 2, 3],[1, 2, 3, 4, 5, 6]])).eql(0)
    })
    it ('should calculate zeros', ()=>{
        expect(countNegative([[0, 0, 0, 0,0 ],[0, 0, 0],[0, 0, 0, 0, 0, 0]])).eq(0)
    })

    it ('should compare arrays', ()=>{
        expect([[2, 4, 3, 5,-2 ],[-1, 2, 3],[-1, 2, 3, 4, 5, 6]]).eql([[2, 4, 3, 5,-2 ],[-1, 2, 3],[-1, 2, 3, 4, 5, 6]])
    });

});



describe('power function',()=>{

    it('should calculate powers', ()=>{
        expect(powerOf(2, 2)).eql(4);
    })

    it('should calculate powers for negative', () =>{
        expect(powerOf(-2,-2)).eq(0.25);
    })

    it ('should return NaN if either argument is not a a number', ()=>{
        expect (powerOf(NaN)).eql(NaN);
    })

    it ('should return 1 if number && pow == 0 ', ()=>{
        expect (powerOf(0,0)).eql(1);
    })
});


describe('factorial function',()=>{

    it('should calculate factorial of a number', ()=>{
        expect(factorialOf(5)).eql(120)
    })

    it ('should calculate zeros', ()=>{
        expect(factorialOf(0)).eq(1)
    })
    it ('should return NaN if either argument is not a a number', ()=>{
        expect (factorialOf('asd')).eql(NaN);
    })

});


describe('turn the vowels to upper case',()=>{

    it('should be a type of string', ()=>{
        expect(vowelsToUpperCase(5)).eq('name should be a string');
    })

    it ('should return vowels to upper case', ()=>{
        expect (vowelsToUpperCase('Can we have a cake?')).eql('AEAEAAE')
    })

    it ('should compare values to upper case ', ()=>{
        expect('AEIOU').eq('AEIOU')
    })


});



describe('name function',()=>{

    it('should return a name', ()=>{
        expect(greet(' Angelina')).eq("Hello Angelina")
    })

    it('should be a type of string', () =>{
        expect(greet(4)).eq('name should be string')
    })

    it ('should compare values to upper case ', ()=>{
        expect("Hello Angelina").eq("Hello Angelina")
    })


});

describe('calculate expression of a numbers',()=>{

    it('should calculate expression square roots turned into two decimals ', ()=>{
        expect(sqrtR(2,4,6)).eql(1.42);
    })

    it('should return NaN for negative  numbers', () =>{
        expect(sqrtR(-2,-4,-6)).eql(NaN);
    })

    it ('should return NaN if either argument is not a a number', ()=>{
        expect (sqrtR('abc')).eql(NaN);
    })

    it('should return NaN if values are 0', () =>{
        expect(sqrtR(0,0,0)).eql(NaN);
    })
});


describe('add one to each number of array function',()=> {

    it('should add one to each num', ()=>{
        expect(addOne([1, 2, 3, 4, 5])).eql([2, 3, 4, 5, 6])
    })

    it('should add one to each  negative number', () =>{
        expect(addOne([-1, -2, -3, -4, -5, -6, -7])).eql([0, -1, -2, -3, -4, -5, -6])
    })

    it ('should compare arrays', ()=>{
        expect([1, 2, 3, 4, 5]).eql([1, 2, 3, 4, 5])
    });


    it ('should return NaN if either argument is not a a number', ()=>{
        expect (addOne(NaN)).eql(NaN);
    })

});
