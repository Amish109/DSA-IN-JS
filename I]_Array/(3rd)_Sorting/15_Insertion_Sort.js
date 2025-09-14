// start with less thay is ascending

function insertionSort(array_data = [34, 12, 89, 45, 23, 7, 56, 91]){
    for(let current_index = 0;current_index <array_data.length-1; current_index++){
        let sorted_last_index = current_index - 1;
        let current_value = array_data[current_index];
        while(sorted_last_index >=0 && current_value < array_data[sorted_last_index]){
            array_data[sorted_last_index + 1] = array_data[sorted_last_index];
            sorted_last_index--;
        }
        array_data[sorted_last_index +1] = current_value;
    }
    return array_data;
}

console.log('insertionSort()',insertionSort());

// [0,5,7,3]

// current_index = 3
// current_value = 3
// sorted_last_index = 1


// while(2,1,0 && currvalue < array_data[value] )
// array_data[value+1] =array_data[value]
// --









// function insertionSort(array_data = [34, 12, 89, 45, 23, 7, 56, 91]){
//     // left side sorted rigt side unsorted so start from index one and then arrange the position of right side one by one
//     debugger;    
//     for(let i=1; i<array_data.length; i++){
//         for(let j=i-1 ; j>=0; j--){
//             // if(array_data[i] >=array_data[j]  && j!==0){
//             if(array_data[i] >=array_data[j] && i-j!==1){
//                 let temp = array_data[i];
//                 for(let incr =i-1 ; incr>=j+1;incr--){
//                     array_data[incr+1] = array_data[incr];
//                 }
//                 array_data[j+1] = temp;
//                 break;

//             } else if(array_data[i] >=array_data[j] && i-j==1){
//                 break;
//                 // let temp = array_data[i];
//                 // array_data[i] = array_data[i-1]
//                 // array_data[i-1] = temp;
//             } else if(j==0 && array_data[j] > array_data[i] && i-j!==1){
//                 let temp = array_data[i];
//                 for(let incr =i-1 ; incr>=j;incr--){
//                     array_data[incr+1] = array_data[incr];
//                 }
//                 array_data[j] = temp
//                 break;

//             } else if(j==0 && array_data[j] > array_data[i] && i-j==1){
//                 let temp = array_data[i];
//                 array_data[i] =array_data[i-1];
//                 array_data[i-1] = temp;
//                 break;

//             }
//         }
//     }
//     return array_data;
// }

// console.log(insertionSort([10, -3, 25, 7, 7, 42, 0, -15, 8, 19, 33, -3]));