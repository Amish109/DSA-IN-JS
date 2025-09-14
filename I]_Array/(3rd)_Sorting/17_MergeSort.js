const {merge} = require('./16_Merge_Sorted_Array_Algo')

const divide = (array)=>{
    let array1=[];
    let array2=[];
    let mid_point = Math.floor(array.length/2);
    for(let left_array=0;left_array< mid_point;left_array++){
        array1.push(array[left_array]);
    }
    for(let right_array=mid_point;right_array<array.length;right_array++){
        array2.push(array[right_array]);
    }
    return {
        array1,array2
    }
}

// const mergeSort = (array_data = [34, 12, 89, 45, 23, 7, 56, 91])=>{
const mergeSort = (array_data = [ 89, 45, 23, 7, 56,45, 91])=>{
    if(array_data.length ===1){
        return array_data;
    }
    let {array1,array2} = divide(array_data);
    return merge(mergeSort(array1),mergeSort(array2));
}
console.log('Merge Sort Output is :-',mergeSort());



// console.log(divide([34, 12, 89, 45, 23, 7, 56, 91]))
// console.log(divide([34, 12, 89, 45, 23, 7, 56]))
// console.log(divide([34, 12]))
// console.log(divide([34]))
// console.log(divide([]))