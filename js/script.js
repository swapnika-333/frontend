console.log("swapnika")
setTimeout(() => console.log("Hi"), 2000);
setInterval(() => console.log("This runs every 2 seconds"), 2000);


function outerFunction(){
    let counter=0;
    function innerFunction(){
        counter++;
        return counter;
    }
    return innerFunction;
}
const incrementcounter=outerFunction();
console.log(incrementcounter());
console.log(incrementcounter());
console.log(incrementcounter());