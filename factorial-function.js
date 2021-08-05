function factorial(number){
    let factorial = 1;
    for(let i = 1; i<= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let firsFactorial = factorial(5);
console.log(firsFactorial);

let secondFactorial = factorial(7);
console.log(secondFactorial);
