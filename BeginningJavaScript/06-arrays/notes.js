// Array
// 1. Definition
var arr = [1,7,45,4]
console.log("Define an array: [" + arr + "]")
console.log("Type of array: " + typeof arr)     // => object

// 2. Access
// index
console.log("The first element of array " + arr[0])

// 3. Modification
arr.push(6)
console.log(arr)

// Iterate
var output = ""
for( let num in arr){
    output += num + " "
}
console.log("for-in loop: " + output + "  Hops not as expected")

var output = ""
for(let i=0; i<arr.length ; i++){
    output += arr[i] + " "
}
console.log("for loop: " + output)

// string vs array
// slice
// concat
