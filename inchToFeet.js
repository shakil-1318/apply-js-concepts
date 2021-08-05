function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var myInches = 144;
var feet = inchToFeet(myInches);
console.log(feet);

var dadiInches = 156;
var feet = inchToFeet(dadiInches);
console.log(feet);

var dadaInches = 132;
var feet = inchToFeet(dadaInches);
console.log(feet);

//miles to km
function milesToKilometer(mile){
    var kilometer = mile * (1.6);
    return kilometer;
}
var myMiles = 500;
var kilometer = milesToKilometer(myMiles);
console.log(kilometer);

var myMiles = 1000;
var kilometer = milesToKilometer(myMiles);
console.log(kilometer);
