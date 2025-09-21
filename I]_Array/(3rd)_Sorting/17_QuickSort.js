//  Test Quick sort again

const { divide_using_quick_sort_algo } = require("./17_QuickSortAlgo");


function quicksortArray(array_inp=[9, 3, 7, 6, 2, 8, 1, 5, 4]){
    if(array_inp.length < 2){
        return array_inp;
    }
    let {array,pivot} = divide_using_quick_sort_algo(array_inp);
   
    return  [...quicksortArray(array_inp.slice(0,pivot)),array[pivot],...quicksortArray(array_inp.slice(pivot+1,array.length))]; 
}
console.log('quicksortArray();',quicksortArray());

































// const {divide_using_quick_sort_algo} = require('./18_QuickSortAlgo');

// function quickSort(array_inp){
//     if(array_inp.length <=1){
//          return array_inp;
//         // return {
//         //     array:array_inp,
//         //     pivot:0
//         // };
//     }
//     let {array,pivot} = divide_using_quick_sort_algo(array_inp);
//     let array_left = quickSort(array.slice(0,pivot));
//     let array_right = quickSort(array.slice(pivot+1,array.length));
//     return [...array_left,array[pivot],...array_right];
// }
// console.log('quickSort([9, 3, 7, 6, 2, 8, 1, 5, 4]);',quickSort([9, 3, 7, 6, 2, 8, 1, 5, 4]))