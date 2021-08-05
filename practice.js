//temperature 

// function celsiusToFarenheit(celsius){
//     let farenheit = (celsius *(9/5)) + 32;
//     return farenheit;
// }
// let myCelsiusNumber = celsiusToFarenheit(37);
// console.log('amar faren temp hocche ', myCelsiusNumber);

// let herCelsiusNumber = celsiusToFarenheit(40);
// console.log('tar faren temp hocche ', herCelsiusNumber);

// function farenheitToCelsius(faren){
//     let celsius = (faren - 32) * 5/9;
//     return celsius;
// }

// let myFaren = farenheitToCelsius(103);
// console.log('amar celsius tem hocche ', myFaren);

// let herFaren = farenheitToCelsius(106);
// console.log('tar celsius tem hocche ', herFaren);

//grade calculation

// function gradeSystem(result){
//     if(result > 100 || 0 > result){
//         console.log('undefined result');
//     }
//     else if(100 >= result && 80 <= result){
//         console.log('you got gpa-5')
//     }
//     else if(80 > result && 70 <= result){
//         console.log('you got gpa-4');
//     }
//     else if(70 > result && 60 <= result){
//         console.log('you got gpa-4');
//     }
//     else if(60 > result && 50 <= result){
//         console.log('you got gpa-3');
//     }
//     else if(50 > result && 40 <=result){
//         console.log('you got gpa-2');
//     }
//     else if(40 > result && 33 <= result){
//         console.log('you got gpa-1');
//     }
//     else{
//         console.log('you are failure ');
//     }
// }
// gradeSystem(25);
// gradeSystem(59);
// gradeSystem(80);
// gradeSystem(44);

//simple interest calc

// let deposit = 3000;
// let rate = (8/100);
// let interest = deposit * rate * 2;
// console.log(interest);

// function getdepositToInterest(deposit, year){
//     let result = deposit * (8/100) * year;
//     return result;
// }
// let myFirstInterest = getdepositToInterest(3000, 1)
// let totalMoney = myFirstInterest + 3000;
// console.log(myFirstInterest);
// console.log(totalMoney);

// let mySecondtInterest = getdepositToInterest(3000, 2)
// console.log(mySecondtInterest);

// let myThirdInterest = getdepositToInterest(3000, 3)
// console.log(myThirdInterest);

let number = 123;
let result = 0;
while(number != 0){
    let remainder = number % 10;
    result = result + remainder;
    number = number / 10; 
}
console.log(parseInt(result))

// for(let i=0; i<=number; i++){
//     let remainder = number % 10;
//     result = result + remainder;
//     number = number / 10;
// }