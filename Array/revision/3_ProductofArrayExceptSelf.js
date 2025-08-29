// https://leetcode.com/problems/product-of-array-except-self/description/?envType=problem-list-v2&envId=array

// We can also use division
// total product = product of all and then iterate and divide with the num at position at tht index

let nums = [1,2,3,4] // [24,12,8,6]
const productExceptSelf = (data = nums)=>{
    // [1,1,2,6]
    // [24,12,4,1]
    let left_array = [1];
    let right_array = [1];
    let product = 1;
    for(let i=1; i<data.length; i++){
        product *= data[i-1];
        left_array.push(product);
    }
    console.log('left_array',left_array);
    product = 1;
    for(let i=data.length -2; i>=0; i--){
        product *= data[i+1];
        right_array.unshift(product);
    }
    console.log('right_array',right_array);
    return nums.map((ele,index)=>left_array[index] * right_array[index] );
}
console.log(productExceptSelf());