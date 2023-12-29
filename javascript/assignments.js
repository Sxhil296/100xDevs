var names = "sahil" 
console.log(names);
console.log(names.split('').sort().join(''));
console.log(names.split('').sort());

function isAnagram(str1, str2){
    let str1Lower = str1.toLowerCase()
    let str2Lower = str2.toLowerCase()
    if( str1Lower.split('').sort().join('') == str2Lower.split('').sort().join('')){
        return true
    } else {
        return false
    }
}

let result = isAnagram("lIsten", "Silent")
console.log(result);
