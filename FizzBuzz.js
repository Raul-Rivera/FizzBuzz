
var random = Math.floor(Math.random()*100)+1;

if (random%3==0 && random%5!=0) {
    console.log("Fizz");
} else if (random%5==0 && random%3!=0) {
    console.log("Buzz");
} else if (random%15==0) {
    console.log("FizzBuzz");
} else {
    console.log(random)
}