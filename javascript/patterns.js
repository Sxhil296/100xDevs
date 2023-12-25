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

function printHollowSquarePattern(n){
    singleFullRow(n)
    for(let i=0;i<n-2;i++){
        printPartialRow(n)
    }
    singleFullRow(n)
}

printHollowSquarePattern(5)
