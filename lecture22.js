var testArray = [2, 4, 6, 3, 1, 5, 9, 8, 0];
//console.log(testArray.fill("h"));

//console.log(testArray.fill("h", 3));
//starts filling from the fourth element

//console.log(testArray.fill("h", 3, 6)); the filler variable, start, end

const number = [23, 25, 3, 6, 7, 8, 87, 22, 91];
const result = number.filter((num) => (num < 25));
const result2 = number.filter((num) => {
    return num != 23;
})
console.log(result);

result.sort();
console.log(result);
// when using return statement to callback, always use curly braces
// else (when not writing return statement), use parenthesis.