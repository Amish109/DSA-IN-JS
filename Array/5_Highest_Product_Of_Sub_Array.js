// Given an integer array, return the maximum product of a subarray.
// A subarray is a contiguous part of the array.
//
// Example 1:
// input: [2,3,-2,4]
// output: 6
// Explanation: [2,3] has the largest product = 6
//
// Example 2:
// input: [-2,0,-1]
// output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a contiguous subarray

const maxProductSubArray = (data) =>{
    let max_product = 1;
    let current_product = 1;
    for(let i=0; i<data.length; i++){
        console.log("current_product",current_product)
        if(current_product==0){
            current_product = 1;
        } else {
            current_product *= data[i];
        }
        if(current_product>max_product){
            max_product = current_product;
        }
    }
    current_product = 1;
    for(let i=data.length -1; i>=0; i--){
        console.log("current_product",current_product)
        if(current_product==0){
            current_product = 1;
        } else {
            current_product *= data[i];
        }
        if(current_product>max_product){
            max_product = current_product;
        }
    }

    return max_product;
}

// let  result = maxProductSubArray([-2,0,-1,4,3]);
// let  result = maxProductSubArray([2,3,-2,4]);
let  result = maxProductSubArray([2,-3,4]);
console.log('result',result);