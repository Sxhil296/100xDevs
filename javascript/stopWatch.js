let count = 1
function printCounter(){
console.clear()
console.log(count);
count +=1
}

setInterval(printCounter, 1000)
// setTimeout(printCounter, 10*1000)