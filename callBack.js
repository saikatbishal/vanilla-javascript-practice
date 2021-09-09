function isEven(params) {
    // if (params % 2 == 0)
    // {
    //     return true;
    // }
    // return false;
    return params % 2 === 0;
}
//console.log(isEven(3));

///////

// var isnotEven = (params) => {
//     return (params + 1) % 2 === 0;
// }



//console.log(isnotEven(35));

//callback  

// var result = [2, 5, 6, 8].every(isEven);
// console.log(result);

// true if all values are even
// false if any value is odd



var result1 = [2, 3, 4, 5].every((event) => {
    return event % 2 === 0;})
console.log(result1);

var result = [2, 4, 6, 8].every((e) =>( e % 2 === 0));
console.log(result); // we do not use curly braces when we do not need return statement