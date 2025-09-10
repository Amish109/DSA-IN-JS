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

const highestProductOfSubArray = (data)=>{
    let highest_product = data[0];
    let product = data[0];
    for(let i=1;i<data.length;i++){
        if(i==0){
            product =1;
            continue;
        } else{
            product *=data[i];
        }
        highest_product = Math.max(highest_product,product);
    }
    product =data[data.length-1];
    for(let i=data.length-2;i>=0;i--){
        if(i==0){
            product =1;
            continue;
        } else{
            product *=data[i];
        }
        highest_product = Math.max(highest_product,product);
    }
    return highest_product;
}

console.log(highestProductOfSubArray([-2,-1,0,-1,-3]));