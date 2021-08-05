// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(number >= i){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// let firstFactorial = getFactorial(5)
// console.log(firstFactorial);

// let secondFactorial = getFactorial(7)
// console.log(secondFactorial);

// function getFactorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// let secondFactorial = getFactorial(7)
// console.log(secondFactorial);

//for loop reverse
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
let factorial = getFactorial(7);
console.log(factorial);
