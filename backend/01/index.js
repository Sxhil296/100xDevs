import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";

let numberOfRequests = 0;

// function middleware1(req, res, next) {
//   numberOfRequests = numberOfRequests + 1;
//   console.log(numberOfRequests);
//   console.log("from middleware " + req.headers.counter);
//   res.send("error inside middleware")
//   next();
// }

// app.use(middleware1);
app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

// function calculateMul(counter) {
//   let mul = 1;
//   for (let i = 1; i <= counter; i++) {
//     mul = mul * i;
//   }
//   return mul;
// }

function handleRequest(req, res) {
  let counter = req.query.counter
  //   console.log(req.headers);
  // let counter = req.headers.counter;
  // console.log(req.body);
  // let calculatedSum = calculateSum(100);
//   let counter = req.body.counter;

  //   if (counter < 100000) {
  let calculatedSum = calculateSum(counter);
  //   let calculatedMul = calculateMul(counter);
  let answerObject = {
    sum: calculatedSum,
    // mul: calculatedMul,
  };
  //   let answer = "The sum is " + calculatedSum +" and mul is " + calculateMul;
  res.send(answerObject);
  //   } else {
  //     res.status(411).send("You have sent a very big number!");
  //   }
}

// function givePage(req, res) {
//   res.send(`<h1>Hi there</h1>`);
// res.sendFile(__dirname+'/index.html')
// }

// app.get("/", givePage);

app.get('/handleSum', handleRequest)
// app.post("/handleSum", handleRequest);

function started() {
  console.log(`App is running on port ${port}`);
}

app.listen(port, started);

// let result = calculateSum(100)
// console.log(result);
