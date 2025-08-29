// const highestSumOfSubArray = (data)=>{
//     let highest=0;
//     let sum=0;
//     // [-2,1,-3,4,-1,2,1,-5,4]
//     for(let i=0;i<data.length;i++){
//         if(sum+data[i]<0){
//             sum=0;
//             continue;
//         } else{
//             sum+=data[i];
//         }
//         highest = Math.max(sum,highest);

//     }
//     return highest
// }

// for negatives
const highestSumOfSubArray = (data)=>{
    debugger;
    let highest=0;
    let sum=0;
    // [-2,-1,-3,-4,-1,-2,-1,-5,-4]
    for(let i=0;i<data.length;i++){
        if(i==0){
            sum=data[i];
            highest=data[i];
            continue;
        }else if(sum<0 && data[i]>0){
            sum=data[i];
        } else if(sum>0 && data[i] <0 && data[i]+sum<0){
            sum=0;
        }
        // else if(sum+data[i]<0){
        //     sum=0;
        //     continue;
        // } 
        else{
            sum+=data[i];
        }
        highest = Math.max(sum,highest);

    }
    return highest
}

console.log(highestSumOfSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(highestSumOfSubArray([-2,-1,-3,-4,-1,-2,-1,-5,-4]))
// Given an array return the highest sum subarray
// input : [-2,1,-3,4,-1,2,1,-5,4]
// output 6
/**
 * 
 */

// Kadane’s Algorithm

// ================== Important ==================
// if the ouverall current sum goes - we will skip it as if we add that sub array with any other it will just reduce it 



