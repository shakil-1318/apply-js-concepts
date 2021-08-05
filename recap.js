//variable declare
var time = '10:15pm';
var bookPrice = 100;
var isBlueColor = true;

//array
var partners = ['rahim', 'karim', 'talim', 'sajid'];
var elementCount = partners.length;
var talimIndex = partners.indexOf('talim');
partners.push('katib');
partners.pop();

//condition
if(bookPrice < 120){
    console.log('I will buy this book');
}
else{
    console.log('mama please give me discount, you are my mama..');
}

//
var i = 0;
while(i < 200){
    //do something
    i++;
}


//function
function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);
console.log(moonStatus);

//let const
//value of the variable could change
let price = 200;
price = 300;

//value of the variable will not change
const myName = 'hakil';
console.log(myName);
myName = 'pakil'