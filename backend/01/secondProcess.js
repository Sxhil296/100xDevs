function logResponseBody(jsonBody){
    console.log(jsonBody);
}


function callBackFn(result){
    // console.log(result);
    result.json().then(logResponseBody)
}


let sendObj ={
    method: "GET"
}

fetch('http://localhost:3000/handleSum?counter=4', sendObj).then(callBackFn)