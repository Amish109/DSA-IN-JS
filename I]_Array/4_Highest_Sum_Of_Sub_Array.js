// Given an array return the highest sum subarray
// input : [-2,1,-3,4,-1,2,1,-5,4]
// output 6
/**
 * 
 */

// Kadane’s Algorithm

// ================== Important ==================
// if the ouverall current sum goes - we will skip it as if we add that sub array with any other it will just reduce it 


const calculateHighrdtConsecutiveSubArraySum = (data)=>{
    // initial state
    let max_sum = data[0];
    let current_sum = data[0];

    for(let i = 1;i<data.length; i++){
        console.log('current sum',current_sum);
        if(current_sum<0){
            current_sum = data[i];
        } else{
            current_sum += data[i];
        }
        if(current_sum>max_sum){
            max_sum = current_sum;
        }
    }

    return max_sum;
}
let array = [-2,1,-3,4,-1,2,1,-5,4];
// let array = [1,2,3,4,5,6,-50,30];
// let array = [1,2,3,4,5,6,-2,30];
// let array = [1,2,3,4,5,6];
let result = calculateHighrdtConsecutiveSubArraySum(array);
console.log('result',result);