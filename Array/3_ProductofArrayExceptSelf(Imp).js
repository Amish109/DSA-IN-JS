// https://leetcode.com/problems/product-of-array-except-self/description/?envType=problem-list-v2&envId=array

// to multiply values of array except other values in the array
// for example: [1, 2, 3, 4, 5]
// output: [120, 60, 40, 30, 24]

// condition:
// 1. no division
// 2. time complexity should be O(n)

const data = [1, 2, 3, 4, 5];

// 1,1,2,6,24
// 120,60,20,5,1

// Solution without division

// so in this we will use pre calculate values 
// as product of values before the current index and same for right side then just multiply them

function MultiplyIndexExceptSelf(array){
    let left = [1];
    let right = [1];
    for(let i =1; i<=array.length-1;i++){
        let last_num = left[left.length - 1];
        left.push(last_num*array[i-1]);
    }

    for(let i =array.length-2; i>=0;i--){
        let first_num = right[0];
        right.unshift(first_num*array[i+1]);
    }
    console.log("left",left);
    console.log("right",right);
    return array.map((ele,index)=>{
        return left[index] * right[index]
    })
}

console.log(MultiplyIndexExceptSelf(data));