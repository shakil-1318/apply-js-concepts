// var year = 1600;
// if(year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)){
//     console.log(year+" "+'This year is a leap year');
// }
// else {
//     console.log('not leap year');
// }

//function 

function isLeapYear(year){
    if(year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)){
        return true;
    }
    return false;
}
var leapYear = 1600;
var myYear = isLeapYear(leapYear);
console.log(myYear);

var leapYear = 2100;
var yourYear = isLeapYear(leapYear);
console.log(yourYear);