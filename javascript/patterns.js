//first pattern
function printStars(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < i + 1; j++) {
      result = result + "*";
    }
    console.log(result);
  }
}
printStars(5);
console.log("");

//second pattern
function stairsPattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (j = 0; j < i + 1; j++) {
      result = result + "**";
    }
    console.log(result);
  }
}
stairsPattern(5);
console.log(" ");

//third pattern
function singleFullRow(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str = str + "*";
  }
  console.log(str);
}
function printRow(n){
    for(let i=0;i<n;i++){
        singleFullRow(n);
    }
}
printRow(5)
console.log(" ");

//fourth pattern
function printPartialRow(n) {
  let str = "";
  str = str + "*";
  for (let i = 0; i <= n - 2; i++) {
    str = str + " ";
  }
  str = str + "*";
  console.log(str);
}

function singleFullRow(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str = str + "*";
  }
  console.log(str);
}

function printHollowSquarePattern(n) {
  singleFullRow(n);
  for (let i = 0; i < n - 2; i++) {
    printPartialRow(n);
  }
  singleFullRow(n);
}

printHollowSquarePattern(5);
