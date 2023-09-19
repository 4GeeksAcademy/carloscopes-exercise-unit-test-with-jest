const { sum } = require('./app.js');

test('adds 15 + 5 to equal 20', () => {
    let total = sum(15, 5);

    expect(total).toBe(20);
});

//Test

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollar should be 106.58 Yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const expected = 3.5 * (127.9/1.2); 
    
     expect(fromDollarToYen(3.5)).toBe(3.5 * (127.9/1.2)); 
})
test("One yen should be 0.00625 Pounds", function(){

    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(3.5)

    const expected = 3.5 * (0.8/127.9); 
    
     expect(fromYenToPound(3.5)).toBe(3.5 * (0.8/127.9)); 
})