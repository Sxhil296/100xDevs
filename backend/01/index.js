import express from "express"
const app = express()
const port = 3000


function calculateSum(counter){
    let sum = 0
    for(let i=0; i<=counter;i++){
        sum = sum+i
    }
    return sum;
}

function handleRequest(req, res){
    let counter = req.query.counter
    let calculatedSum = calculateSum(counter);

    let answer = "The sum is " + calculatedSum
    res.send(answer)
}

app.get('/handleSum', handleRequest)

function started(){
    console.log(`App is running on port ${port}`);
}

app.listen(port, started)

// let result = calculateSum(100)
// console.log(result);