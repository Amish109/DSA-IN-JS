const divide_using_quick_sort_algo =(array)=>{
    /*
    approach :-
    1) consider the last pivot (last index) and then arrange the nummbers less than that on the left side
    2) numbers equal wiill be on the right and numbers greter will be left on right
    3) swap the last index which is pivot with the number in middle till where the less numbers were kept and then return the pivot number
    
    */
   let pivot = array.length - 1;
    let current_index =-1;
    for(let i = 0; i < array.length; i++ ){
        if(array[i]<array[pivot]){
            current_index++;
            let temp = array[current_index];
            array[current_index] = array[i];
            array[i] = temp;
        }
    }
    current_index+=1;
    let temp = array[current_index];
    array[current_index] = array[pivot];
    array[pivot] = temp;
    pivot = current_index;
    return{
        array,
        pivot
    }
 }

 console.log(divide_using_quick_sort_algo([9, 3, 7, 6, 2, 8, 1, 5, 4]));

 module.exports = {
    divide_using_quick_sort_algo
 }