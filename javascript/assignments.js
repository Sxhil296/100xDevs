var names = "sahil";
console.log(names);
console.log(names.split("").sort().join(""));
console.log(names.split("").sort());

function isAnagram(str1, str2) {
  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();
  if (
    str1Lower.split("").sort().join("") == str2Lower.split("").sort().join("")
  ) {
    return true;
  } else {
    return false;
  }
}

let result = isAnagram("lIsten", "Silent");
console.log(result);

//second assignment

function solve(transactions) {
  let spendEstimates = {};
  for (var i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    // console.log(t);
    // console.log(spendEstimates[t.category]);
    if(spendEstimates[t.category]){
        spendEstimates[t.category] = spendEstimates[t.category]+ t.price
    } else {
        spendEstimates[t.category] = t.price
    }
  }
  console.log(spendEstimates);
  
}

var transactions = [
  {
    itemName: "Pepsi",
    category: "Drink",
    price: 20,
  },
  {
    itemName: "Sprite",
    category: "Drink",
    price: 20,
  },
  {
    itemName: "Tea",
    category: "Drink",
    price: 15,
  },
  {
    itemName: "Samosa",
    category: "Food",
    price: 10,
  },
  {
    itemName: "Gulabjamun",
    category: "Food",
    price: 25,
  },
  {
    itemName: "Rolling",
    category: "Other",
    price: 25,
  },
];

console.log(transactions.length);
solve(transactions);
